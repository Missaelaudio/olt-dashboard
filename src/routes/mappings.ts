import express from 'express';
import multer from 'multer';
import { PrismaClient } from '@prisma/client';
import * as XLSX from 'xlsx';

const prisma = new PrismaClient();
const router = express.Router();

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
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

router.post('/api/mappings/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: 'No se recibió archivo' });

  try {
    const workbook = XLSX.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    if (!sheetName) return res.status(400).json({ message: 'El archivo Excel no contiene hojas' });

    const sheet = workbook.Sheets[sheetName];
    const rows: Row[] = XLSX.utils.sheet_to_json(sheet);

    const errors: { row: number; error: string }[] = [];
    let insertedMappings = 0;

    // Optional replace behavior: ?replace=true borra mappings antes de insertar
    const replace = req.query.replace === 'true';

    if (replace) {
      // If you want to replace globally (all OLTs), we clear all mappings
      await prisma.mapping.deleteMany({});
    }

    for (let i = 0; i < rows.length; i++) {
      const rowNumber = i + 2; // assuming headers are in row 1
      const r = rows[i];

      const oltName = (r.OLT ?? '').toString().trim();
      const slot = toInt(r.SLOT);
      const pon = toInt(r.PON);
      const edfaName = (r.EDFA ?? '').toString().trim();
      const edfaPonPort = r['PON/EDFA']?.toString().trim();
      const edfaComPort = r['COM/EDFA']?.toString().trim();
      const chasisName = (r.CHASIS ?? '').toString().trim();
      const divisorSlot = toInt(r['P./SPLITTER']);
      const splitterOutput =
        (r['SALIDA SPLITTER'] ?? r['SALIDA'] ?? r['SPLITTER_SALIDA'] ?? '').toString().trim() || undefined;
      const entrada = (r.ENTRADA ?? '').toString().trim() || undefined;
      const odfNumber = toInt(r['O.D.F']);
      const buffer = toInt(r.BUFFER);
      const hiloColor = (r['HILO (S)'] ?? '').toString().trim();
      const feeder = (r.FEEDER ?? '').toString().trim() || undefined;

      // Required validations
      if (!oltName) {
        errors.push({ row: rowNumber, error: 'OLT vacío' });
        continue;
      }
      if (slot === null) {
        errors.push({ row: rowNumber, error: 'SLOT inválido' });
        continue;
      }
      if (pon === null) {
        errors.push({ row: rowNumber, error: 'PON inválido' });
        continue;
      }
      if (odfNumber === null) {
        errors.push({ row: rowNumber, error: 'O.D.F inválido' });
        continue;
      }
      if (buffer === null) {
        errors.push({ row: rowNumber, error: 'BUFFER inválido' });
        continue;
      }
      if (!hiloColor) {
        errors.push({ row: rowNumber, error: 'HILO (S) vacío' });
        continue;
      }

      // Business rule: slots 9 y 10 son controladoras. Permitimos fila pero no creamos Port.
      if (slot === 9 || slot === 10) {
        // seguimos creando el mapping con referencias, pero omitimos Port
        // Sin un Port, no podemos crear Mapping que requiere portId. En lugar de eso,
        // registramos un error controlado para que el frontend lo muestre.
        errors.push({ row: rowNumber, error: 'Slot 9/10 son controladoras; no se crea Port. Use otro slot para PON.' });
        continue;
      }

      try {
        // Upserts for each entity based on unique constraints
        const olt = await prisma.olt.upsert({
          where: { name: oltName },
          update: {},
          create: { name: oltName },
        });

        const port = await prisma.port.upsert({
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
          ? await prisma.edfa.upsert({
              where: { name: edfaName },
              update: {},
              create: { name: edfaName },
            })
          : null;

        const chasis = chasisName
          ? await prisma.chasis.upsert({
              where: { name: chasisName },
              update: {},
              create: { name: chasisName },
            })
          : null;

        const divisor =
          chasis && divisorSlot !== null
            ? await prisma.divisor.upsert({
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

        const odf = await prisma.odf.upsert({
          where: { odfNumber },
          update: {},
          create: { odfNumber },
        });

        const odfPort = await prisma.odfPort.upsert({
          where: {
            odfId_buffer_color: {
              odfId: odf.id,
              buffer: buffer!,
              color: hiloColor,
            },
          },
          update: {},
          create: {
            odfId: odf.id,
            buffer: buffer!,
            color: hiloColor,
          },
        });

        await prisma.mapping.create({
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
      } catch (e) {
        console.error(`Row ${rowNumber} failed:`, e);
        errors.push({ row: rowNumber, error: 'Error procesando fila (consulte logs)' });
      }
    }

    res.json({
      message: 'Procesamiento completado',
      insertedMappings,
      errors,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error procesando Excel de mappings' });
  }
});

export default router;