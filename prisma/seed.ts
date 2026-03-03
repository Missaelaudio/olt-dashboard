import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  // Limpieza previa
  await prisma.mapping.deleteMany();
  await prisma.odfPort.deleteMany();
  await prisma.odf.deleteMany();
  await prisma.divisor.deleteMany();
  await prisma.chasis.deleteMany();
  await prisma.edfa.deleteMany();
  await prisma.port.deleteMany();
  await prisma.olt.deleteMany();

  // Crear OLT (sin IP)
  const olt = await prisma.olt.create({
    data: { name: 'GRN-OLT1' },
  });

  // Crear puertos (18 slots × 16 puertos cada uno, excepto slots 9 y 10)
  const PORTS_PER_SLOT = 16;
  const ports: any[] = [];

  for (let slot = 1; slot <= 18; slot++) {
    if (slot === 9 || slot === 10) continue; // mantener vacíos

    for (let p = 1; p <= PORTS_PER_SLOT; p++) {
      ports.push({
        oltId: olt.id,
        slot,
        portNumber: p,
        status: 'available',
        label: `${p}`, // solo número
        rx: Math.random() * -20,
        tx: Math.random() * 5,
        vcc: 3.3,
        brand: 'FIBERHOME',
      });
    }
  }
  await prisma.port.createMany({ data: ports });
  console.log(`✅ Puertos generados: ${ports.length}`);

  // Crear EDFA
  const edfa = await prisma.edfa.create({
    data: { name: 'EDFA-GRN01' },
  });

  // Crear Chasis + Divisor
  const chasis = await prisma.chasis.create({
    data: { name: 'CHASIS-GRN01' },
  });

  const divisor = await prisma.divisor.create({
    data: {
      chasisId: chasis.id,
      slot: 1,
      type: '1:4',
    },
  });

  // Crear ODF con 12 puertos
  const odf = await prisma.odf.create({
    data: { name: 'FEEDER GRN01', odfNumber: 1 },
  });

  const colors = [
    'Azul', 'Naranja', 'Verde', 'Marrón', 'Gris', 'Blanco',
    'Rojo', 'Negro', 'Amarillo', 'Violeta', 'Rosa', 'Celeste'
  ];

  const odfPorts: any[] = [];
  for (let i = 1; i <= 12; i++) {
    odfPorts.push({
      odfId: odf.id,
      number: i,
      buffer: i,
      color: colors[(i - 1) % colors.length],
    });
  }
  await prisma.odfPort.createMany({ data: odfPorts });
  console.log(`✅ ODF Ports generados: ${odfPorts.length}`);

  // Crear mappings entre primeros puertos y ODFPorts
  const createdPorts = await prisma.port.findMany({ where: { oltId: olt.id } });
  const createdOdfPorts = await prisma.odfPort.findMany({ where: { odfId: odf.id } });

  const mappingsToCreate = createdPorts.slice(0, 12).map((port, i) => ({
    oltId: port.oltId,
    portId: port.id,
    odfPortId: createdOdfPorts[i]?.id ?? createdOdfPorts[0].id,
    edfaId: edfa.id,
    chasisId: chasis.id,
    divisorId: divisor.id,
  }));

  await prisma.mapping.createMany({ data: mappingsToCreate });
  console.log(`✅ Mappings creados: ${mappingsToCreate.length}`);

  console.log('🌱 Seed completado');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });