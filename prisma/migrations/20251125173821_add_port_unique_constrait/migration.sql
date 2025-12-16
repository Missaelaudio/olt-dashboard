/*
  Warnings:

  - A unique constraint covering the columns `[oltId,slot,portNumber]` on the table `Port` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Port_oltId_slot_portNumber_key" ON "Port"("oltId", "slot", "portNumber");
