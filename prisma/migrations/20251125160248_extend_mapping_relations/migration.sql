-- AlterTable
ALTER TABLE "Mapping" ADD COLUMN     "chasisId" INTEGER,
ADD COLUMN     "divisorId" INTEGER,
ADD COLUMN     "edfaId" INTEGER;

-- AddForeignKey
ALTER TABLE "Mapping" ADD CONSTRAINT "Mapping_edfaId_fkey" FOREIGN KEY ("edfaId") REFERENCES "Edfa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mapping" ADD CONSTRAINT "Mapping_chasisId_fkey" FOREIGN KEY ("chasisId") REFERENCES "Chasis"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mapping" ADD CONSTRAINT "Mapping_divisorId_fkey" FOREIGN KEY ("divisorId") REFERENCES "Divisor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
