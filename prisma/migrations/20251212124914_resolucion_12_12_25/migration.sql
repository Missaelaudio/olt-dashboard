/*
  Warnings:

  - You are about to drop the column `rx` on the `Port` table. All the data in the column will be lost.
  - You are about to drop the column `tx` on the `Port` table. All the data in the column will be lost.
  - You are about to drop the column `vcc` on the `Port` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Port" DROP COLUMN "rx",
DROP COLUMN "tx",
DROP COLUMN "vcc";
