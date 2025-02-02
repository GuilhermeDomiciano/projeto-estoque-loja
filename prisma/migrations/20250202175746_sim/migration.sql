/*
  Warnings:

  - Added the required column `empresa_id` to the `Marca` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Marca" ADD COLUMN     "empresa_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Marca" ADD CONSTRAINT "Marca_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
