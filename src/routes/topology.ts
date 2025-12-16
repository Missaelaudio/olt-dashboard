import { Router } from 'express';
import prisma from '../prisma/client';

const router = Router();

router.get('/topology', async (req, res) => {
  try {
    const olts = await prisma.olt.findMany({
      include: {
        ports: {
          include: {
            mappings: {
              include: {
                odfPort: {
                  include: {
                    odf: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    // Transformar estructura
    const topology = olts.map((olt) => ({
      id: olt.id,
      name: olt.name,
      createdAt: olt.createdAt,
      ports: olt.ports.map((port) => {
        const mapping = port.mappings[0]; // asumimos 1:1
        return {
          id: port.id,
          slot: port.slot,
          portNumber: port.portNumber,
          label: port.label,
          status: port.status,
          rx: port.rx,
          tx: port.tx,
          vcc: port.vcc,
          odfPort: mapping?.odfPort
            ? {
                id: mapping.odfPort.id,
                number: mapping.odfPort.number,
                color: mapping.odfPort.color,
                buffer: mapping.odfPort.buffer,
                odf: mapping.odfPort.odf,
              }
            : null,
        };
      }),
    }));

    res.json(topology);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener topología' });
  }
});

export default router;