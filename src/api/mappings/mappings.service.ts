import prisma from '../../core/utils/prisma';
import { ExcelRow } from '../../core/types/mappings.types';
import { toInt, parseNumbers, parseComplexHilos } from '../../core/utils/parser.utils';
import * as XLSX from 'xlsx';
import fs from 'fs';
import { z } from 'zod';

/**
 * Esquema de validación para Carga Manual
 */
export const ManualMappingSchema = z.object({
  olt: z.string().min(1, "El nombre de la OLT es requerido"),
  slot: z.coerce.number().int().min(1).max(18).refine(n => n !== 9 && n !== 10, "Los slots 9 y 10 están reservados"),
  port: z.coerce.number().int().min(1).max(16, "El puerto debe estar entre 1 y 16"),
  odf: z.coerce.number().int().min(1, "El número de ODF es requerido"),
  buffer: z.coerce.number().int().min(1, "El buffer es requerido"),
  hilo: z.string().min(1, "El hilo (color) es requerido"),
  edfa: z.string().optional().nullable(),
  edfaPon: z.union([z.string(), z.number()]).optional().nullable(),
  edfaCom: z.union([z.string(), z.number()]).optional().nullable(),
  chasis: z.string().optional().nullable(),
  posicion: z.coerce.number().int().optional().nullable(),
  splitterOutput: z.union([z.string(), z.number()]).optional().nullable(),
  entrada: z.string().optional().nullable(),
  feeder: z.string().optional().nullable(),
});

interface UpsertMappingData {
  oltName: string;
  slot: number;
  portNumber: number;
  edfaName?: string | null;
  edfaPonPort?: string | number | null;
  edfaComPort?: string | number | null;
  chasisName?: string | null;
  divisorSlot?: number | null;
  splitterOutput?: string | number | null;
  entrada?: string | null;
  odfNumber: number;
  buffer: number;
  hilo: string;
  feeder?: string | null;
}

/**
 * Función interna para realizar el upsert de datos.
 * Se mantiene dentro del servicio para ser usada tanto en carga manual como masiva.
 */
const upsertMapping = async (tx: any, data: UpsertMappingData) => {
  const {
    oltName, slot, portNumber,
    edfaName, edfaPonPort, edfaComPort,
    chasisName, divisorSlot, splitterOutput, entrada,
    odfNumber, buffer, hilo, feeder
  } = data;

  const olt = await tx.olt.upsert({ where: { name: oltName }, update: {}, create: { name: oltName } });
  
  const port = await tx.port.upsert({
    where: { oltId_slot_portNumber: { oltId: olt.id, slot, portNumber } },
    update: {},
    create: { oltId: olt.id, slot, portNumber, status: 'available', label: `S${slot}-P${portNumber}` },
  });

  const edfa = edfaName ? await tx.edfa.upsert({ where: { name: edfaName }, update: {}, create: { name: edfaName } }) : null;
  const chasis = chasisName ? await tx.chasis.upsert({ where: { name: chasisName }, update: {}, create: { name: chasisName } }) : null;
  
  const divisor = chasis && divisorSlot !== null ? await tx.divisor.upsert({
    where: { chasisId_slot: { chasisId: chasis.id, slot: divisorSlot } },
    update: {},
    create: { chasisId: chasis.id, slot: divisorSlot, type: null },
  }) : null;

  const odf = await tx.odf.upsert({ where: { odfNumber }, update: {}, create: { odfNumber } });
  
  const odfPort = await tx.odfPort.upsert({
    where: { odfId_buffer_color: { odfId: odf.id, buffer: buffer, color: hilo } },
    update: {},
    create: { odfId: odf.id, buffer: buffer, color: hilo },
  });

  await tx.mapping.create({
    data: {
      oltId: olt.id,
      portId: port.id,
      odfPortId: odfPort.id,
      edfaId: edfa?.id ?? null,
      chasisId: chasis?.id ?? null,
      divisorId: divisor?.id ?? null,
      edfaComPort: edfaComPort ? String(edfaComPort) : null,
      edfaPonPort: edfaPonPort ? String(edfaPonPort) : null,
      splitterOutput: splitterOutput ? String(splitterOutput) : null,
      entrada: entrada || null,
      feeder: feeder || null,
    },
  });
};

// --- Métodos de consulta ---

export const getAllOlts = () => {
  return prisma.olt.findMany({ orderBy: { id: 'asc' } });
};

export const getOltPorts = (oltId: number) => {
  return prisma.port.findMany({
    where: { oltId },
    orderBy: [{ slot: 'asc' }, { portNumber: 'asc' }],
    select: { id: true, oltId: true, slot: true, portNumber: true, status: true, label: true, brand: true },
  });
};

export const getMappingDetails = async (oltId: number, slot: number, port: number) => {
  const mapping = await prisma.mapping.findFirst({
    where: { oltId, port: { slot, portNumber: port } },
    include: {
      edfa: true,
      chasis: true,
      divisor: true,
      odfPort: { include: { odf: true } },
    },
  });

  if (!mapping) return null;

  return {
    edfa: mapping.edfa?.name || '-',
    comPort: mapping.edfaComPort || '-',
    ponPort: mapping.edfaPonPort || '-',
    chasis: mapping.chasis?.name || '-',
    position: mapping.divisor?.slot?.toString() || '-',
    splitterOutput: mapping.splitterOutput || '-',
    entrada: mapping.entrada || '-',
    odf: mapping.odfPort?.odf?.odfNumber?.toString() || '-',
    buffer: mapping.odfPort?.buffer?.toString() || '-',
    hilo: mapping.odfPort?.color || '-',
    feeder: mapping.feeder || '-',
  };
};

// --- Lógica de Procesamiento Masivo (Optimizada para Worker) ---

/**
 * Procesa la carga masiva desde un path de archivo.
 * IMPORTANTE: Recibe filePath (string) en lugar de objeto Express.Multer.File 
 * para facilitar la comunicación con el proceso hijo.
 */
export const processBulkUpload = async (filePath: string, sheetName: string, replace: boolean) => {
  try {
    const workbook = XLSX.readFile(filePath);
    const selectedSheet = sheetName && workbook.SheetNames.includes(sheetName) ? sheetName : workbook.SheetNames[0];
    
    if (!selectedSheet) throw new Error('El archivo Excel no contiene hojas válidas');

    const sheet = workbook.Sheets[selectedSheet];
    const rows: ExcelRow[] = XLSX.utils.sheet_to_json(sheet);
    
    if (rows.length > 5000) throw new Error('El archivo excede el límite de 5000 filas');

    interface ErrorDetail { row: number; olt: string; slot: string; field: string; value: string; expected: string; }
    const errors: ErrorDetail[] = [];
    let insertedMappings = 0;

    // Ejecución en transacción con timeout extendido
    await prisma.$transaction(async (tx) => {
      const normalizeKey = (key: string) => key.trim().toUpperCase();
      const processedRows = rows.map((row: any) => {
        const newRow: any = {};
        Object.keys(row).forEach(k => { newRow[normalizeKey(k)] = row[k]; });
        return newRow;
      });

      if (replace) {
        const oltsInFile = new Set<string>();
        processedRows.forEach(r => {
          const val = r['OLT'];
          if (val && String(val).trim()) oltsInFile.add(String(val).trim());
        });
        
        if (oltsInFile.size === 0) oltsInFile.add(selectedSheet.trim());

        const oltsToDelete = await tx.olt.findMany({
          where: { name: { in: Array.from(oltsInFile) } },
          select: { id: true }
        });

        const idsToDelete = oltsToDelete.map((o: any) => o.id);
        if (idsToDelete.length > 0) {
          await tx.mapping.deleteMany({ where: { oltId: { in: idsToDelete } } });
        }
      }

      for (let i = 0; i < processedRows.length; i++) {
        const rowNumber = i + 2;
        const r = processedRows[i];

        const rawOlt = r['OLT'];
        const rawSlot = r['SLOT'];
        const rawPon = r['PON'];
        const rawOdf = r['O.D.F'] || r['ODF'];
        const rawBuffer = r['BUFFER'];
        const rawHilo = r['HILO (S)'] || r['HILO'];

        let oltName = (rawOlt ?? '').toString().trim() || selectedSheet.trim();
        const slot = toInt(rawSlot);
        const pon = toInt(rawPon);
        const odfNumber = toInt(rawOdf);
        const buffers = parseNumbers(rawBuffer);
        const parsedHilos = parseComplexHilos(rawHilo, buffers);

        const addError = (field: string, value: any, expected: string) => {
          errors.push({ 
            row: rowNumber, 
            olt: oltName || String(rawOlt ?? '—'), 
            slot: slot?.toString() || String(rawSlot ?? '—'), 
            field, value: String(value ?? ''), expected 
          });
        };

        if (!oltName) { if (rawOlt !== undefined) addError('OLT', rawOlt, 'Texto no vacío'); continue; }
        if (slot === null) { if (rawSlot !== undefined) addError('SLOT', rawSlot, 'Número entero'); continue; }
        if (pon === null) { if (rawPon !== undefined) addError('PON', rawPon, 'Número entero'); continue; }
        if (odfNumber === null) { if (rawOdf !== undefined) addError('O.D.F', rawOdf, 'Número entero'); continue; }
        if (buffers.length === 0) { if (rawBuffer !== undefined) addError('BUFFER', rawBuffer, 'Número(s) entero(s)'); continue; }
        if (parsedHilos.length === 0) { if (rawHilo !== undefined) addError('HILO (S)', rawHilo, 'Texto no vacío'); continue; }

        const edfaName = (r['EDFA'] ?? '').toString().trim();
        const edfaPonPort = r['PON/EDFA']?.toString().trim();
        const edfaComPort = r['COM/EDFA']?.toString().trim();
        const chasisName = (r['CHASIS'] ?? '').toString().trim();
        const divisorSlot = toInt(r['P./SPLITTER'] || r['POSICION']);
        const splitterOutput = (r['SALIDA SPLITTER'] ?? r['SALIDA'] ?? r['SPLITTER_SALIDA'] ?? '').toString().trim() || undefined;
        const entrada = (r['ENTRADA'] ?? '').toString().trim() || undefined;
        const feeder = (r['FEEDER'] ?? '').toString().trim() || undefined;

        for (const item of parsedHilos) {
          await upsertMapping(tx, {
            oltName, slot, portNumber: pon, edfaName, edfaPonPort, edfaComPort,
            chasisName, divisorSlot, splitterOutput, entrada, odfNumber,
            buffer: item.buffer, hilo: item.hilo, feeder
          });
          insertedMappings += 1;
        }
      }
    }, { timeout: 90000 }); // Aumentamos un poco el timeout por ser proceso pesado

    return { insertedMappings, errors };
  } finally {
    // Limpieza: Borramos el archivo temporal una vez procesado (o si falla)
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (err) {
        console.error('Error al borrar archivo temporal:', err);
      }
    }
  }
};

// --- Métodos de guardado manual y borrado ---

export const saveManualMapping = async (data: any) => {
  // Validamos los datos con el esquema Zod
  const validatedData = ManualMappingSchema.parse(data);

  const { 
    olt: oltName, slot, port: portNumber, odf: odfNumber, 
    buffer, hilo: hiloStr, edfa: edfaName, edfaPon: edfaPonPort,
    edfaCom: edfaComPort, chasis: chasisName, posicion: divisorSlot,
    splitterOutput, entrada, feeder 
  } = validatedData;

  await prisma.$transaction(async (tx) => {
    const olt = await tx.olt.findUnique({ where: { name: oltName } });
    if (olt) {
      const port = await tx.port.findUnique({
        where: { oltId_slot_portNumber: { oltId: olt.id, slot, portNumber } },
        select: { id: true }
      });
      if (port) {
        await tx.mapping.deleteMany({ where: { portId: port.id } });
      }
    }

    await upsertMapping(tx, {
      oltName, slot, portNumber, edfaName, edfaPonPort, edfaComPort,
      chasisName, divisorSlot, splitterOutput, entrada, odfNumber,
      buffer, hilo: hiloStr, feeder
    });
  });
};

export const deleteOltAndData = (oltId: number) => {
  return prisma.$transaction(async (tx) => {
    await tx.mapping.deleteMany({ where: { oltId } });
    await tx.port.deleteMany({ where: { oltId } });
    await tx.olt.delete({ where: { id: oltId } });
  });
};