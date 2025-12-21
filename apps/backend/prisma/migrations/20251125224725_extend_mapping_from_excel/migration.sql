/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Chasis` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[chasisId,slot]` on the table `Divisor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Edfa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[odfNumber]` on the table `Odf` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[odfId,buffer,color]` on the table `OdfPort` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Olt` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Divisor" ALTER COLUMN "type" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Mapping" ADD COLUMN     "edfaComPort" TEXT,
ADD COLUMN     "edfaPonPort" TEXT,
ADD COLUMN     "entrada" TEXT,
ADD COLUMN     "feeder" TEXT,
ADD COLUMN     "splitterOutput" TEXT;

-- AlterTable
ALTER TABLE "Odf" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "OdfPort" ALTER COLUMN "number" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Port" ALTER COLUMN "status" SET DEFAULT 'available';

-- CreateIndex
CREATE UNIQUE INDEX "Chasis_name_key" ON "Chasis"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Divisor_chasisId_slot_key" ON "Divisor"("chasisId", "slot");

-- CreateIndex
CREATE UNIQUE INDEX "Edfa_name_key" ON "Edfa"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Odf_odfNumber_key" ON "Odf"("odfNumber");

-- CreateIndex
CREATE UNIQUE INDEX "OdfPort_odfId_buffer_color_key" ON "OdfPort"("odfId", "buffer", "color");

-- CreateIndex
CREATE UNIQUE INDEX "Olt_name_key" ON "Olt"("name");
