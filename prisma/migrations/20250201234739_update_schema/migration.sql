-- AlterTable
ALTER TABLE "Empresa" ADD COLUMN     "ativa" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "ativa" BOOLEAN NOT NULL DEFAULT true;
