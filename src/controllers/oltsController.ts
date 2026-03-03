import { Request, Response } from 'express';
import prisma from '../prisma/client';
import * as XLSX from 'xlsx';
import multer from 'multer';

// Configuración de multer
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 20 * 1024 * 1024 },
});

/**
 * GET /api/olts
 */
export const getOlts = async (_req: Request, res: Response) => {
  try {
    const olts = await prisma.olt.findMany({
      select: {
        id: true,
        name: true,
        //ip: true,
        createdAt: true,
      },
      orderBy: { id: 'asc' },
    });

    res.json(olts);
  } catch (err) {
    console.error('getOlts error:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

/**
 * GET /api/olts/:id/ports
 */
export const getPortsByOlt = async (req: Request, res: Response) => {
  try {
    const oltId = Number(req.params.id);
    if (isNaN(oltId)) {
      return res.status(400).json({ error: 'OLT ID inválido' });
    }

    const ports = await prisma.port.findMany({
      where: { oltId },
      orderBy: [{ slot: 'asc' }, { portNumber: 'asc' }],
    });

    res.json(ports);
  } catch (err) {
    console.error('getPortsByOlt error:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

/**
 * POST /api/olts/upload
 */
export const subirPuertosExcel = [
  upload.single('file'),
  async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No se recibió archivo' });
    }

    try {
      const workbook = XLSX.readFile(req.file.path);
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const rows: any[] = XLSX.utils.sheet_to_json(sheet);

      const errors: { row: number; error: string }[] = [];
      let insertedPorts = 0;

      let currentOltId: number | null = null;

      for (const [index, row] of rows.entries()) {
        const rowNumber = index + 2;

        const oltId = Number(row.OLT);
        const oltName = String(row.OLT_NAME ?? '').trim();

        if (!oltId || isNaN(oltId)) {
          errors.push({ row: rowNumber, error: 'OLT ID inválido' });
          continue;
        }

        if (currentOltId !== oltId) {
          currentOltId = oltId;

          await prisma.olt.upsert({
            where: { id: oltId },
            update: { name: oltName || `OLT-${oltId}` },
            create: { id: oltId, name: oltName || `OLT-${oltId}` },
          });

          await prisma.port.deleteMany({ where: { oltId } });
        }

        const slot = Number(row.slot);
        const portNumber = Number(row.portNumber);
        const label = String(row.label ?? '').trim();

        if (!slot || !portNumber || !label) {
          errors.push({ row: rowNumber, error: 'Datos incompletos' });
          continue;
        }

        if (slot < 1 || slot > 18 || slot === 9 || slot === 10) {
          errors.push({ row: rowNumber, error: 'Slot inválido' });
          continue;
        }

        if (portNumber < 1 || portNumber > 16) {
          errors.push({ row: rowNumber, error: 'Puerto fuera de rango' });
          continue;
        }

        await prisma.port.create({
          data: {
            oltId,
            slot,
            portNumber,
            label,
            status: 'available',
          },
        });

        insertedPorts++;
      }

      res.json({
        message: 'Carga finalizada',
        inserted: insertedPorts,
        errors,
      });
    } catch (err) {
      console.error('subirPuertosExcel error:', err);
      res.status(500).json({ message: 'Error procesando Excel' });
    }
  },
];
