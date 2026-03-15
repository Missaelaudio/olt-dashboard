-- CreateTable
CREATE TABLE "Olt" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Olt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Port" (
    "id" SERIAL NOT NULL,
    "oltId" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "portNumber" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "label" TEXT,
    "rx" DOUBLE PRECISION,
    "tx" DOUBLE PRECISION,
    "vcc" DOUBLE PRECISION,
    "brand" TEXT,

    CONSTRAINT "Port_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Edfa" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Edfa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chasis" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Chasis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Divisor" (
    "id" SERIAL NOT NULL,
    "chasisId" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Divisor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Odf" (
    "id" SERIAL NOT NULL,
    "odfNumber" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "networks" TEXT,

    CONSTRAINT "Odf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OdfPort" (
    "id" SERIAL NOT NULL,
    "odfId" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "buffer" INTEGER,
    "color" TEXT,

    CONSTRAINT "OdfPort_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mapping" (
    "id" SERIAL NOT NULL,
    "portId" INTEGER NOT NULL,
    "edfaId" INTEGER,
    "chasisId" INTEGER,
    "divisorId" INTEGER,
    "odfId" INTEGER,
    "odfPortId" INTEGER,
    "edfaPort" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mapping_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Port_oltId_slot_portNumber_key" ON "Port"("oltId", "slot", "portNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Mapping_portId_key" ON "Mapping"("portId");

-- AddForeignKey
ALTER TABLE "Port" ADD CONSTRAINT "Port_oltId_fkey" FOREIGN KEY ("oltId") REFERENCES "Olt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Divisor" ADD CONSTRAINT "Divisor_chasisId_fkey" FOREIGN KEY ("chasisId") REFERENCES "Chasis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OdfPort" ADD CONSTRAINT "OdfPort_odfId_fkey" FOREIGN KEY ("odfId") REFERENCES "Odf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mapping" ADD CONSTRAINT "Mapping_portId_fkey" FOREIGN KEY ("portId") REFERENCES "Port"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mapping" ADD CONSTRAINT "Mapping_edfaId_fkey" FOREIGN KEY ("edfaId") REFERENCES "Edfa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mapping" ADD CONSTRAINT "Mapping_chasisId_fkey" FOREIGN KEY ("chasisId") REFERENCES "Chasis"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mapping" ADD CONSTRAINT "Mapping_divisorId_fkey" FOREIGN KEY ("divisorId") REFERENCES "Divisor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mapping" ADD CONSTRAINT "Mapping_odfId_fkey" FOREIGN KEY ("odfId") REFERENCES "Odf"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mapping" ADD CONSTRAINT "Mapping_odfPortId_fkey" FOREIGN KEY ("odfPortId") REFERENCES "OdfPort"("id") ON DELETE SET NULL ON UPDATE CASCADE;
