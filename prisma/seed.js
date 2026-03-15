var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('🌱 Iniciando seed...');
        // Limpieza previa
        yield prisma.mapping.deleteMany();
        yield prisma.odfPort.deleteMany();
        yield prisma.odf.deleteMany();
        yield prisma.divisor.deleteMany();
        yield prisma.chasis.deleteMany();
        yield prisma.edfa.deleteMany();
        yield prisma.port.deleteMany();
        yield prisma.olt.deleteMany();
        // Crear OLT (sin IP)
        const olt = yield prisma.olt.create({
            data: { name: 'GRN-OLT1' },
        });
        // Crear puertos (18 slots × 16 puertos cada uno, excepto slots 9 y 10)
        const PORTS_PER_SLOT = 16;
        const ports = [];
        for (let slot = 1; slot <= 18; slot++) {
            if (slot === 9 || slot === 10)
                continue; // mantener vacíos
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
        yield prisma.port.createMany({ data: ports });
        console.log(`✅ Puertos generados: ${ports.length}`);
        // Crear EDFA
        const edfa = yield prisma.edfa.create({
            data: { name: 'EDFA-GRN01' },
        });
        // Crear Chasis + Divisor
        const chasis = yield prisma.chasis.create({
            data: { name: 'CHASIS-GRN01' },
        });
        const divisor = yield prisma.divisor.create({
            data: {
                chasisId: chasis.id,
                slot: 1,
                type: '1:4',
            },
        });
        // Crear ODF con 12 puertos
        const odf = yield prisma.odf.create({
            data: { name: 'FEEDER GRN01', odfNumber: 1 },
        });
        const colors = [
            'Azul', 'Naranja', 'Verde', 'Marrón', 'Gris', 'Blanco',
            'Rojo', 'Negro', 'Amarillo', 'Violeta', 'Rosa', 'Celeste'
        ];
        const odfPorts = [];
        for (let i = 1; i <= 12; i++) {
            odfPorts.push({
                odfId: odf.id,
                number: i,
                buffer: i,
                color: colors[(i - 1) % colors.length],
            });
        }
        yield prisma.odfPort.createMany({ data: odfPorts });
        console.log(`✅ ODF Ports generados: ${odfPorts.length}`);
        // Crear mappings entre primeros puertos y ODFPorts
        const createdPorts = yield prisma.port.findMany({ where: { oltId: olt.id } });
        const createdOdfPorts = yield prisma.odfPort.findMany({ where: { odfId: odf.id } });
        const mappingsToCreate = createdPorts.slice(0, 12).map((port, i) => {
            var _a, _b;
            return ({
                oltId: port.oltId,
                portId: port.id,
                odfPortId: (_b = (_a = createdOdfPorts[i]) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : createdOdfPorts[0].id,
                edfaId: edfa.id,
                chasisId: chasis.id,
                divisorId: divisor.id,
            });
        });
        yield prisma.mapping.createMany({ data: mappingsToCreate });
        console.log(`✅ Mappings creados: ${mappingsToCreate.length}`);
        console.log('🌱 Seed completado');
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
