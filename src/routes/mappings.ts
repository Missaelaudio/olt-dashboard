import express from 'express';
import fs from 'fs';
import multer from 'multer';
import { PrismaClient } from '@prisma/client';
import * as XLSX from 'xlsx';

const prisma = new PrismaClient();
const router = express.Router();

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
  fileFilter: (_req, file, cb) => {
    // Validar Mime Types de Excel
    const allowedMimes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel'
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo inválido. Solo se permiten archivos Excel (.xlsx, .xls)'));
    }
  }
});

type Row = {
  OLT?: string;
  SLOT?: number | string;
  PON?: number | string;
  EDFA?: string;
  'PON/EDFA'?: string | number;
  'COM/EDFA'?: string | number;
  CHASIS?: string;
  'P./SPLITTER'?: number | string; // posición/slot del divisor
  'SALIDA SPLITTER'?: string | number; // opcional, nueva columna
  ENTRADA?: string;
  'O.D.F'?: number | string;
  BUFFER?: number | string;
  'HILO (S)'?: string;
  FEEDER?: string;
};

// Utility: normalize and parse integer
const toInt = (v: unknown): number | null => {
  if (v === undefined || v === null || v === '') return null;
  const n = Number(String(v).trim());
  return Number.isFinite(n) ? n : null;
};

// Helper: Parsear listas de números (ej: "8 y 9", "1, 2, 3")
const parseNumbers = (v: unknown): number[] => {
  if (!v) return [];
  const str = String(v).toLowerCase();
  // Reemplazar 'y', 'and', '&' por comas para unificar
  const cleanStr = str.replace(/\s+(y|and|&)\s+/g, ',');
  return cleanStr.split(',')
    .map(s => parseInt(s.trim(), 10))
    .filter(n => !isNaN(n));
};

// Helper: Parsear hilos complejos con asociación de buffer
// Ej: "10 (Buffer 8); 1, 2 y 3 (Buffer 9)"
interface ParsedHilo {
  hilo: string;
  buffer: number;
}

const parseComplexHilos = (hiloRaw: unknown, defaultBuffers: number[]): ParsedHilo[] => {
  if (!hiloRaw) return [];
  const hiloStr = String(hiloRaw);
  const results: ParsedHilo[] = [];

  // Si no hay punto y coma ni paréntesis, asumimos formato simple
  if (!hiloStr.includes(';') && !hiloStr.includes('(')) {
    // Si hay múltiples buffers por defecto (ej: "8 y 9") y hilos simples, 
    // asignamos los hilos al primer buffer o generamos entradas para todos?
    // Asumiremos que si no se especifica, va al primer buffer detectado.
    const buffer = defaultBuffers[0] || 0; 
    return [{ hilo: hiloStr.trim(), buffer }];
  }

  // Dividir por grupos separados por punto y coma
  const groups = hiloStr.split(';');
  
  for (const group of groups) {
    // Buscar patrón "(Buffer X)"
    const bufferMatch = group.match(/\(Buffer\s*(\d+)\)/i);
    let currentBuffer = bufferMatch ? parseInt(bufferMatch[1], 10) : defaultBuffers[0] || 0;
    
    // Limpiar el string del indicador de buffer
    const cleanGroup = group.replace(/\(Buffer\s*\d+\)/gi, '').trim();
    
    // Separar los hilos (ej: "1, 2 y 3")
    const hilos = cleanGroup.replace(/\s+(y|and|&)\s+/g, ',').split(',');
    
    for (const h of hilos) {
      const trimmed = h.trim();
      if (trimmed) {
        results.push({ hilo: trimmed, buffer: currentBuffer });
      }
    }
  }

  return results;
};

router.post('/api/mappings/sheets', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: 'No se recibió archivo' });

  try {
    const workbook = XLSX.readFile(file.path);
    res.json({ sheets: workbook.SheetNames });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error leyendo el archivo Excel' });
  } finally {
    if (file && file.path) {
      try { fs.unlinkSync(file.path); } catch (e) {}
    }
  }
});

router.post('/api/mappings/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: 'No se recibió archivo' });

  try {
    const workbook = XLSX.readFile(file.path);
    
    // Usar la hoja seleccionada o la primera por defecto
    const selectedSheet = req.body.sheetName;
    const sheetName = selectedSheet && workbook.SheetNames.includes(selectedSheet) 
      ? selectedSheet 
      : workbook.SheetNames[0];

    if (!sheetName) return res.status(400).json({ message: 'El archivo Excel no contiene hojas válidas' });

    const sheet = workbook.Sheets[sheetName];
    const rows: Row[] = XLSX.utils.sheet_to_json(sheet);

    // Protección contra DoS: Limitar cantidad de filas por carga
    if (rows.length > 5000) {
      return res.status(400).json({ message: 'El archivo excede el límite de 5000 filas.' });
    }

    // Definimos la estructura detallada del error
    interface ErrorDetail {
      row: number;
      olt: string;
      slot: string;
      field: string;
      value: string;
      expected: string;
    }
    const errors: ErrorDetail[] = [];
    let insertedMappings = 0;

    // Optional replace behavior: ?replace=true borra mappings antes de insertar
    const replace = req.query.replace === 'true';

    // INICIO DE TRANSACCIÓN ATÓMICA
    // Todo lo que ocurra dentro de este bloque se ejecuta como una unidad.
    // Si falla algo, se hace rollback automático de todo.
    await prisma.$transaction(async (tx) => {
      // 1. Normalización de encabezados y pre-procesamiento
      // Esto permite que "SLOT ", "slot", "Slot" sean tratados igual
      const normalizeKey = (key: string) => key.trim().toUpperCase();
      
      const processedRows = rows.map((row: any) => {
        const newRow: any = {};
        Object.keys(row).forEach(k => {
          newRow[normalizeKey(k)] = row[k];
        });
        return newRow;
      });

      // 2. Lógica de Reemplazo Inteligente (Solo borra las OLTs involucradas)
      if (replace) {
        const oltsInFile = new Set<string>();
        processedRows.forEach(r => {
          const val = r['OLT'];
          if (val && String(val).trim()) oltsInFile.add(String(val).trim());
        });
        
        // Si no hay columna OLT, asumimos la de la hoja
        if (oltsInFile.size === 0 && sheetName) {
          oltsInFile.add(sheetName.trim());
        }

        if (oltsInFile.size > 0) {
          const oltsToDelete = await tx.olt.findMany({
            where: { name: { in: Array.from(oltsInFile) } },
            select: { id: true }
          });
          const idsToDelete = oltsToDelete.map(o => o.id);
          
          if (idsToDelete.length > 0) {
            await tx.mapping.deleteMany({
              where: { oltId: { in: idsToDelete } }
            });
            // Nota: No borramos los puertos para mantener la integridad si hay otras referencias,
            // pero los mappings (conexiones) se limpian para esta OLT.
          }
        }
      }

      for (let i = 0; i < processedRows.length; i++) {
        const rowNumber = i + 2; // assuming headers are in row 1
        const r = processedRows[i];

        // Capturamos valores crudos para el reporte de errores
        // Usamos las claves en mayúsculas y trimmeadas
        const rawOlt = r['OLT'];
        const rawSlot = r['SLOT'];
        const rawPon = r['PON'];
        const rawOdf = r['O.D.F'] || r['ODF']; // Soporte para alias
        const rawBuffer = r['BUFFER'];
        const rawHilo = r['HILO (S)'] || r['HILO'];

        let oltName = (rawOlt ?? '').toString().trim();
        // Si la columna OLT no viene en el Excel, usamos el nombre de la hoja
        if (!oltName) {
          oltName = sheetName.trim();
        }
        const slot = toInt(rawSlot);
        const pon = toInt(rawPon);
        const edfaName = (r['EDFA'] ?? '').toString().trim();
        const edfaPonPort = r['PON/EDFA']?.toString().trim();
        const edfaComPort = r['COM/EDFA']?.toString().trim();
        const chasisName = (r['CHASIS'] ?? '').toString().trim();
        const divisorSlot = toInt(r['P./SPLITTER'] || r['POSICION']);
        const splitterOutput =
          (r['SALIDA SPLITTER'] ?? r['SALIDA'] ?? r['SPLITTER_SALIDA'] ?? '').toString().trim() || undefined;
        const entrada = (r['ENTRADA'] ?? '').toString().trim() || undefined;
        const odfNumber = toInt(rawOdf);
        // Lógica avanzada de parsing
        const buffers = parseNumbers(rawBuffer); // Puede ser [8, 9]
        const parsedHilos = parseComplexHilos(rawHilo, buffers); // [{hilo: '10', buffer: 8}, ...]
        const feeder = (r['FEEDER'] ?? '').toString().trim() || undefined;

        // Helper para agregar errores de forma consistente
        const addError = (field: string, value: any, expected: string) => {
          errors.push({
            row: rowNumber,
            olt: oltName || String(rawOlt ?? '—'),
            slot: slot?.toString() || String(rawSlot ?? '—'),
            field,
            value: String(value ?? ''),
            expected
          });
        };

        // Required validations
        if (!oltName) {
          if (rawOlt !== undefined && rawOlt !== null && String(rawOlt).trim() !== '') addError('OLT', rawOlt, 'Texto no vacío');
          continue;
        }
        if (slot === null) {
          if (rawSlot !== undefined && rawSlot !== null && String(rawSlot).trim() !== '') addError('SLOT', rawSlot, 'Número entero');
          continue;
        }
        if (pon === null) {
          if (rawPon !== undefined && rawPon !== null && String(rawPon).trim() !== '') addError('PON', rawPon, 'Número entero');
          continue;
        }
        if (odfNumber === null) {
          if (rawOdf !== undefined && rawOdf !== null && String(rawOdf).trim() !== '') addError('O.D.F', rawOdf, 'Número entero');
          continue;
        }
        if (buffers.length === 0) {
          if (rawBuffer !== undefined && rawBuffer !== null && String(rawBuffer).trim() !== '') addError('BUFFER', rawBuffer, 'Número(s) entero(s)');
          continue;
        }
        if (parsedHilos.length === 0) {
          if (rawHilo !== undefined && rawHilo !== null && String(rawHilo).trim() !== '') addError('HILO (S)', rawHilo, 'Texto no vacío');
          continue;
        }


        // Business rule: slots 9 y 10 son controladoras. Permitimos fila pero no creamos Port.
        if (slot === 9 || slot === 10) {
          addError('SLOT', slot, 'Slot de servicio (no 9 o 10)');
          continue;
        }

        // Upserts for each entity based on unique constraints using 'tx'
        const olt = await tx.olt.upsert({
            where: { name: oltName },
            update: {},
            create: { name: oltName },
          });

          const port = await tx.port.upsert({
            where: {
              oltId_slot_portNumber: {
                oltId: olt.id,
                slot,
                portNumber: pon,
              },
            },
            update: {},
            create: {
              oltId: olt.id,
              slot,
              portNumber: pon,
              status: 'available',
              label: `S${slot}-P${pon}`,
            },
          });

          const edfa = edfaName
            ? await tx.edfa.upsert({
              where: { name: edfaName },
              update: {},
              create: { name: edfaName },
            })
            : null;

          const chasis = chasisName
            ? await tx.chasis.upsert({
              where: { name: chasisName },
              update: {},
              create: { name: chasisName },
            })
            : null;

          const divisor =
            chasis && divisorSlot !== null
              ? await tx.divisor.upsert({
                where: {
                  chasisId_slot: {
                    chasisId: chasis.id,
                    slot: divisorSlot,
                  },
                },
                update: {},
                create: {
                  chasisId: chasis.id,
                  slot: divisorSlot,
                  type: null,
                },
              })
              : null;

          const odf = await tx.odf.upsert({
            where: { odfNumber },
            update: {},
            create: { odfNumber },
          });

          // Iteramos sobre cada hilo/buffer parseado para crear múltiples mappings si es necesario
          for (const item of parsedHilos) {
            const odfPort = await tx.odfPort.upsert({
              where: {
                odfId_buffer_color: {
                  odfId: odf.id,
                  buffer: item.buffer,
                  color: item.hilo,
                },
              },
              update: {},
              create: {
                odfId: odf.id,
                buffer: item.buffer,
                color: item.hilo,
              },
            });

            await tx.mapping.create({
              data: {
                oltId: olt.id,
                portId: port.id,
                odfPortId: odfPort.id,
                edfaId: edfa?.id ?? null,
                chasisId: chasis?.id ?? null,
                divisorId: divisor?.id ?? null,
                edfaComPort: edfaComPort || null,
                edfaPonPort: edfaPonPort || null,
                splitterOutput: splitterOutput || null,
                entrada: entrada || null,
                feeder: feeder || null,
              },
            });

            insertedMappings += 1;
          }
      }
    }, {
      timeout: 60000 // Aumentamos timeout a 60s para cargas grandes
    });

    res.json({
      message: 'Procesamiento completado',
      insertedMappings,
      errors,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error procesando Excel de mappings (Transacción revertida)', error: String(err) });
  } finally {
    // LIMPIEZA: Eliminar el archivo temporal siempre, ocurra error o no
    if (file && file.path) {
      try {
        fs.unlinkSync(file.path);
      } catch (e) {
        console.error('Error eliminando archivo temporal:', e);
      }
    }
  }
});

router.get('/api/mappings/details', async (req, res) => {
  const { oltId, slot, port } = req.query;

  if (!oltId || !slot || !port) {
    return res.status(400).json({ message: 'Faltan parámetros requeridos (oltId, slot, port)' });
  }

  try {
    // Buscamos el mapping que coincida con la OLT y la ubicación del puerto
    const mapping = await prisma.mapping.findFirst({
      where: {
        oltId: Number(oltId),
        port: {
          slot: Number(slot),
          portNumber: Number(port),
        },
      },
      // Incluimos las relaciones para obtener los nombres reales (JOINs)
      include: {
        edfa: true,
        chasis: true,
        divisor: true,
        odfPort: {
          include: {
            odf: true,
          },
        },
      },
    });

    if (!mapping) {
      return res.status(404).json({ message: 'No se encontró información para este puerto' });
    }

    // Mapeamos la respuesta al formato exacto que espera el frontend (PortDetailData)
    res.json({
      edfa: mapping.edfa?.name || '-',
      comPort: mapping.edfaComPort || '-',
      ponPort: mapping.edfaPonPort || '-',
      chasis: mapping.chasis?.name || '-',
      position: mapping.divisor?.slot?.toString() || '-',
      odf: mapping.odfPort?.odf?.odfNumber?.toString() || '-',
      buffer: mapping.odfPort?.buffer?.toString() || '-',
      hilo: mapping.odfPort?.color || '-',
    });
  } catch (err) {
    console.error('Error obteniendo detalles:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Endpoint para eliminar una OLT y sus datos asociados
router.delete('/api/olts/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: 'ID requerido' });

  try {
    await prisma.$transaction(async (tx) => {
      // 1. Eliminar mappings asociados a puertos de esta OLT
      await tx.mapping.deleteMany({
        where: { oltId: Number(id) },
      });
      // 2. Eliminar puertos de esta OLT
      await tx.port.deleteMany({
        where: { oltId: Number(id) },
      });
      // 3. Eliminar la OLT
      await tx.olt.delete({
        where: { id: Number(id) },
      });
    });
    res.json({ message: 'OLT eliminada correctamente' });
  } catch (err) {
    console.error('Error eliminando OLT:', err);
    res.status(500).json({ message: 'Error eliminando OLT', error: String(err) });
  }
});

export default router;