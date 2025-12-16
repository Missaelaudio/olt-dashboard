import { Router } from 'express';
import prisma from '../prisma/client';

const router = Router();

// Obtener todos los ODFs con sus puertos
router.get('/odfs', async (req, res) => {
  try {
    const odfs = await prisma.odf.findMany({
      include: { ports: true },
    });
    res.json(odfs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener ODFs' });
  }
});

// Obtener un ODF específico por ID con sus puertos
router.get('/odfs/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const odf = await prisma.odf.findUnique({
      where: { id },
      include: { ports: true },
    });
    if (!odf) {
      return res.status(404).json({ error: 'ODF no encontrado' });
    }
    res.json(odf);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener ODF' });
  }
});

export default router;