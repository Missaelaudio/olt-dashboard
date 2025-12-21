import { Router, Request, Response } from "express";
import prisma from "../prisma/client";

const router = Router();

// Definimos interfaces locales para asegurar compatibilidad de tipos incluso si la inferencia falla
interface OltTopology {
  id: number;
  name: string;
  createdAt: Date;
  ports: {
    id: number;
    slot: number;
    portNumber: number;
    label: string | null;
    status: string;
    mappings: {
      odfPort: {
        id: number;
        number: number | null;
        color: string;
        buffer: number;
        odf: {
          id: number;
          name: string | null;
          odfNumber: number;
        };
      } | null;
    }[];
  }[];
}

router.get("/topology", async (req: Request, res: Response) => {
  try {
    const olts = (await prisma.olt.findMany({
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
    })) as unknown as OltTopology[];

    // Transformar estructura
    const topology = olts.map((olt) => ({
      id: olt.id,
      name: olt.name,
      createdAt: olt.createdAt,
      ports: olt.ports.map((port) => {
        const mapping = port.mappings[0]; // asumimos 1:1, puede ser undefined
        return {
          id: port.id,
          slot: port.slot,
          portNumber: port.portNumber,
          label: port.label,
          status: port.status,
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
    res.status(500).json({ error: "Error al obtener topología" });
  }
});

export default router;
