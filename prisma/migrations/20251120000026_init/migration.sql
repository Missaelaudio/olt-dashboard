/*
  Warnings:

  - You are about to drop the column `chasisId` on the `Mapping` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Mapping` table. All the data in the column will be lost.
  - You are about to drop the column `divisorId` on the `Mapping` table. All the data in the column will be lost.
  - You are about to drop the column `edfaId` on the `Mapping` table. All the data in the column will be lost.
  - You are about to drop the column `edfaPort` on the `Mapping` table. All the data in the column will be lost.
  - You are about to drop the column `odfId` on the `Mapping` table. All the data in the column will be lost.
  - You are about to drop the column `networks` on the `Odf` table. All the data in the column will be lost.
  - Added the required column `oltId` to the `Mapping` table without a default value. This is not possible if the table is not empty.
  - Made the column `odfPortId` on table `Mapping` required. This step will fail if there are existing NULL values in that column.
  - Made the column `buffer` on table `OdfPort` required. This step will fail if there are existing NULL values in that column.
  - Made the column `color` on table `OdfPort` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Mapping" DROP CONSTRAINT "Mapping_chasisId_fkey";

-- DropForeignKey
ALTER TABLE "Mapping" DROP CONSTRAINT "Mapping_divisorId_fkey";

-- DropForeignKey
ALTER TABLE "Mapping" DROP CONSTRAINT "Mapping_edfaId_fkey";

-- DropForeignKey
ALTER TABLE "Mapping" DROP CONSTRAINT "Mapping_odfId_fkey";

-- DropForeignKey
ALTER TABLE "Mapping" DROP CONSTRAINT "Mapping_odfPortId_fkey";

-- DropIndex
DROP INDEX "Mapping_portId_key";

-- DropIndex
DROP INDEX "Port_oltId_slot_portNumber_key";

-- AlterTable
ALTER TABLE "Mapping" DROP COLUMN "chasisId",
DROP COLUMN "createdAt",
DROP COLUMN "divisorId",
DROP COLUMN "edfaId",
DROP COLUMN "edfaPort",
DROP COLUMN "odfId",
ADD COLUMN     "oltId" INTEGER NOT NULL,
ALTER COLUMN "odfPortId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Odf" DROP COLUMN "networks";

-- AlterTable
ALTER TABLE "OdfPort" ALTER COLUMN "buffer" SET NOT NULL,
ALTER COLUMN "color" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Mapping" ADD CONSTRAINT "Mapping_oltId_fkey" FOREIGN KEY ("oltId") REFERENCES "Olt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mapping" ADD CONSTRAINT "Mapping_odfPortId_fkey" FOREIGN KEY ("odfPortId") REFERENCES "OdfPort"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
