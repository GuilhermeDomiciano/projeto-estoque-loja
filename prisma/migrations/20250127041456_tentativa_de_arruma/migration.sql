/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Cargo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Empresa` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Formas_pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Itens_kit` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Itens_lote` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Itens_pedido` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Kit` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Lote` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Marca` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Status` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Tipos_variacao` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `UsuarioEmpresa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cargo" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Empresa" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Formas_pagamento" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Itens_kit" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Itens_lote" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Itens_pedido" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Kit" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Lote" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Marca" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Status" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Tipos_variacao" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "UsuarioEmpresa" DROP COLUMN "updatedAt";
