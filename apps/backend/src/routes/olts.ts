import express from 'express';
import multer from 'multer';
import { PrismaClient } from '@prisma/client';
import * as XLSX from 'xlsx';

const prisma = new PrismaClient();
const router = express.Router();

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 20 * 1024 * 1024 },
});

// Crear OLT (sin IP)
router.post('/api/olts', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ message: 'Nombre de OLT requerido' });
    }
    const olt = await prisma.olt.create({ data: { name: name.trim() } });
    res.json(olt);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creando OLT' });
  }
});

// Listar OLTs
router.get('/api/olts', async (_req, res) => {
  const olts = await prisma.olt.findMany({
    orderBy: { id: 'asc' },
    select: { id: true, name: true, createdAt: true },
  });
  res.json(olts);
});

// Obtener puertos de un OLT
router.get('/api/olts/:id/ports', async (req, res) => {
  const oltId = parseInt(req.params.id, 10);
  if (isNaN(oltId)) return res.status(400).json({ message: 'OLT id inválido' });

  const ports = await prisma.port.findMany({
    where: { oltId },
    orderBy: [{ slot: 'asc' }, { portNumber: 'asc' }],
    select: {
      id: true,
      oltId: true,
      slot: true,
      portNumber: true,
      status: true,
      label: true,
      //createdAt: true,
      brand: true,
    },
  });

  res.json(ports);
});

// Subir Excel de puertos con política de reemplazo
router.post('/api/olts/:id/ports', upload.single('file'), async (req, res) => {
  const oltId = parseInt(req.params.id, 10);
  if (isNaN(oltId)) return res.status(400).json({ message: 'OLT id inválido' });

  const file = req.file;
  if (!file) return res.status(400).json({ message: 'No se recibió archivo' });

  try {
    const workbook = XLSX.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    if (!sheetName) return res.status(400).json({ message: 'El archivo Excel no contiene hojas' });

    const sheet = workbook.Sheets[sheetName];
    const rows: any[] = XLSX.utils.sheet_to_json(sheet);

    const validPorts: {
      oltId: number;
      slot: number;
      portNumber: number;
      status: string;
      label: string;
    }[] = [];

    const errors: { row: number; error: string }[] = [];

    rows.forEach((row, index) => {
      const rowNumber = index + 2;
      const slot = Number(row.slot);
      const portNumber = Number(row.portNumber);
      const label = row.label;

      if (row.slot === undefined || row.portNumber === undefined || row.label === undefined) {
        errors.push({ row: rowNumber, error: 'Columnas faltantes (slot, portNumber, label)' });
        return;
      }
      if (isNaN(slot) || isNaN(portNumber)) {
        errors.push({ row: rowNumber, error: 'Tipos inválidos (slot/portNumber deben ser numéricos)' });
        return;
      }
      if (slot < 1 || slot > 18) {
        errors.push({ row: rowNumber, error: 'Slot fuera de rango (1–18)' });
        return;
      }
      if (slot === 9 || slot === 10) {
        errors.push({ row: rowNumber, error: 'Slot prohibido (9 o 10)' });
        return;
      }
      if (portNumber < 1 || portNumber > 16) {
        errors.push({ row: rowNumber, error: 'Número de puerto fuera de rango (1–16)' });
        return;
      }

      const labelStr = String(label).trim();
      if (!labelStr) {
        errors.push({ row: rowNumber, error: 'Label vacío' });
        return;
      }

      validPorts.push({
        oltId,
        slot,
        portNumber,
        status: 'available',
        label: labelStr,
      });
    });

    await prisma.port.deleteMany({ where: { oltId } });

    const batchSize = 500;
    for (let i = 0; i < validPorts.length; i += batchSize) {
      const batch = validPorts.slice(i, i + batchSize);
      if (batch.length > 0) {
        await prisma.port.createMany({ data: batch });
      }
    }

    res.json({
      message: 'Procesamiento completado con reemplazo',
      inserted: validPorts.length,
      errors,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error procesando Excel' });
  }
});

export default router;