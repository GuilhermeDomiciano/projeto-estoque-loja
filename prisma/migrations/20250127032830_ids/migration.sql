/*
  Warnings:

  - The primary key for the `Cargo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Cargo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Cliente` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Empresa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Empresa` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Formas_pagamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Formas_pagamento` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Itens_kit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Itens_kit` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Itens_lote` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Itens_lote` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Itens_pedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Itens_pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lote_id` column on the `Itens_pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `kit_id` column on the `Itens_pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Kit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Kit` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Lote` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Lote` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Marca` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Marca` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Pedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cliente_id` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Produto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Status` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tipos_variacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Tipos_variacao` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `UsuarioEmpresa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `UsuarioEmpresa` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Variacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Variacao` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `_EmpresaToUsuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_Itens_kitToProduto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_Itens_pedidoToVariacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_LoteToVariacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `kit_id` on the `Itens_kit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `variacao_id` on the `Itens_kit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `variacao_id` on the `Itens_lote` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lote_id` on the `Itens_lote` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pedido_id` on the `Itens_pedido` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `empresa_id` on the `Kit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `forma_pagamento_id` on the `Pedido` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status_id` on the `Pedido` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `empresa_id` on the `Pedido` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `marca_id` on the `Produto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `empresa_id` on the `Produto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `usuario_id` on the `UsuarioEmpresa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `empresa_id` on the `UsuarioEmpresa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cargo_id` on the `UsuarioEmpresa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tipo_variacao_id` on the `Variacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `produto_id` on the `Variacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_EmpresaToUsuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_EmpresaToUsuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_Itens_kitToProduto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_Itens_kitToProduto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_Itens_pedidoToVariacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_Itens_pedidoToVariacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_LoteToVariacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_LoteToVariacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Itens_kit" DROP CONSTRAINT "Itens_kit_kit_id_fkey";

-- DropForeignKey
ALTER TABLE "Itens_kit" DROP CONSTRAINT "Itens_kit_variacao_id_fkey";

-- DropForeignKey
ALTER TABLE "Itens_lote" DROP CONSTRAINT "Itens_lote_lote_id_fkey";

-- DropForeignKey
ALTER TABLE "Itens_lote" DROP CONSTRAINT "Itens_lote_variacao_id_fkey";

-- DropForeignKey
ALTER TABLE "Itens_pedido" DROP CONSTRAINT "Itens_pedido_kit_id_fkey";

-- DropForeignKey
ALTER TABLE "Itens_pedido" DROP CONSTRAINT "Itens_pedido_lote_id_fkey";

-- DropForeignKey
ALTER TABLE "Itens_pedido" DROP CONSTRAINT "Itens_pedido_pedido_id_fkey";

-- DropForeignKey
ALTER TABLE "Kit" DROP CONSTRAINT "Kit_empresa_id_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_cliente_id_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_empresa_id_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_forma_pagamento_id_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_status_id_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_empresa_id_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_marca_id_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioEmpresa" DROP CONSTRAINT "UsuarioEmpresa_cargo_id_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioEmpresa" DROP CONSTRAINT "UsuarioEmpresa_empresa_id_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioEmpresa" DROP CONSTRAINT "UsuarioEmpresa_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Variacao" DROP CONSTRAINT "Variacao_produto_id_fkey";

-- DropForeignKey
ALTER TABLE "Variacao" DROP CONSTRAINT "Variacao_tipo_variacao_id_fkey";

-- DropForeignKey
ALTER TABLE "_EmpresaToUsuario" DROP CONSTRAINT "_EmpresaToUsuario_A_fkey";

-- DropForeignKey
ALTER TABLE "_EmpresaToUsuario" DROP CONSTRAINT "_EmpresaToUsuario_B_fkey";

-- DropForeignKey
ALTER TABLE "_Itens_kitToProduto" DROP CONSTRAINT "_Itens_kitToProduto_A_fkey";

-- DropForeignKey
ALTER TABLE "_Itens_kitToProduto" DROP CONSTRAINT "_Itens_kitToProduto_B_fkey";

-- DropForeignKey
ALTER TABLE "_Itens_pedidoToVariacao" DROP CONSTRAINT "_Itens_pedidoToVariacao_A_fkey";

-- DropForeignKey
ALTER TABLE "_Itens_pedidoToVariacao" DROP CONSTRAINT "_Itens_pedidoToVariacao_B_fkey";

-- DropForeignKey
ALTER TABLE "_LoteToVariacao" DROP CONSTRAINT "_LoteToVariacao_A_fkey";

-- DropForeignKey
ALTER TABLE "_LoteToVariacao" DROP CONSTRAINT "_LoteToVariacao_B_fkey";

-- AlterTable
ALTER TABLE "Cargo" DROP CONSTRAINT "Cargo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Cliente" DROP CONSTRAINT "Cliente_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Empresa" DROP CONSTRAINT "Empresa_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Formas_pagamento" DROP CONSTRAINT "Formas_pagamento_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Formas_pagamento_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Itens_kit" DROP CONSTRAINT "Itens_kit_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "kit_id",
ADD COLUMN     "kit_id" INTEGER NOT NULL,
DROP COLUMN "variacao_id",
ADD COLUMN     "variacao_id" INTEGER NOT NULL,
ADD CONSTRAINT "Itens_kit_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Itens_lote" DROP CONSTRAINT "Itens_lote_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "variacao_id",
ADD COLUMN     "variacao_id" INTEGER NOT NULL,
DROP COLUMN "lote_id",
ADD COLUMN     "lote_id" INTEGER NOT NULL,
ADD CONSTRAINT "Itens_lote_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Itens_pedido" DROP CONSTRAINT "Itens_pedido_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "pedido_id",
ADD COLUMN     "pedido_id" INTEGER NOT NULL,
DROP COLUMN "lote_id",
ADD COLUMN     "lote_id" INTEGER,
DROP COLUMN "kit_id",
ADD COLUMN     "kit_id" INTEGER,
ADD CONSTRAINT "Itens_pedido_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Kit" DROP CONSTRAINT "Kit_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "empresa_id",
ADD COLUMN     "empresa_id" INTEGER NOT NULL,
ADD CONSTRAINT "Kit_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Lote" DROP CONSTRAINT "Lote_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Lote_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Marca" DROP CONSTRAINT "Marca_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Marca_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "forma_pagamento_id",
ADD COLUMN     "forma_pagamento_id" INTEGER NOT NULL,
DROP COLUMN "status_id",
ADD COLUMN     "status_id" INTEGER NOT NULL,
DROP COLUMN "cliente_id",
ADD COLUMN     "cliente_id" INTEGER,
DROP COLUMN "empresa_id",
ADD COLUMN     "empresa_id" INTEGER NOT NULL,
ADD CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "marca_id",
ADD COLUMN     "marca_id" INTEGER NOT NULL,
DROP COLUMN "empresa_id",
ADD COLUMN     "empresa_id" INTEGER NOT NULL,
ADD CONSTRAINT "Produto_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Status" DROP CONSTRAINT "Status_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Status_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tipos_variacao" DROP CONSTRAINT "Tipos_variacao_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Tipos_variacao_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UsuarioEmpresa" DROP CONSTRAINT "UsuarioEmpresa_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "usuario_id",
ADD COLUMN     "usuario_id" INTEGER NOT NULL,
DROP COLUMN "empresa_id",
ADD COLUMN     "empresa_id" INTEGER NOT NULL,
DROP COLUMN "cargo_id",
ADD COLUMN     "cargo_id" INTEGER NOT NULL,
ADD CONSTRAINT "UsuarioEmpresa_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Variacao" DROP CONSTRAINT "Variacao_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "tipo_variacao_id",
ADD COLUMN     "tipo_variacao_id" INTEGER NOT NULL,
DROP COLUMN "produto_id",
ADD COLUMN     "produto_id" INTEGER NOT NULL,
ADD CONSTRAINT "Variacao_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_EmpresaToUsuario" DROP CONSTRAINT "_EmpresaToUsuario_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL,
ADD CONSTRAINT "_EmpresaToUsuario_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "_Itens_kitToProduto" DROP CONSTRAINT "_Itens_kitToProduto_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL,
ADD CONSTRAINT "_Itens_kitToProduto_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "_Itens_pedidoToVariacao" DROP CONSTRAINT "_Itens_pedidoToVariacao_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL,
ADD CONSTRAINT "_Itens_pedidoToVariacao_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "_LoteToVariacao" DROP CONSTRAINT "_LoteToVariacao_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL,
ADD CONSTRAINT "_LoteToVariacao_AB_pkey" PRIMARY KEY ("A", "B");

-- CreateIndex
CREATE INDEX "_EmpresaToUsuario_B_index" ON "_EmpresaToUsuario"("B");

-- CreateIndex
CREATE INDEX "_Itens_kitToProduto_B_index" ON "_Itens_kitToProduto"("B");

-- CreateIndex
CREATE INDEX "_Itens_pedidoToVariacao_B_index" ON "_Itens_pedidoToVariacao"("B");

-- CreateIndex
CREATE INDEX "_LoteToVariacao_B_index" ON "_LoteToVariacao"("B");

-- AddForeignKey
ALTER TABLE "UsuarioEmpresa" ADD CONSTRAINT "UsuarioEmpresa_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEmpresa" ADD CONSTRAINT "UsuarioEmpresa_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEmpresa" ADD CONSTRAINT "UsuarioEmpresa_cargo_id_fkey" FOREIGN KEY ("cargo_id") REFERENCES "Cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_marca_id_fkey" FOREIGN KEY ("marca_id") REFERENCES "Marca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variacao" ADD CONSTRAINT "Variacao_tipo_variacao_id_fkey" FOREIGN KEY ("tipo_variacao_id") REFERENCES "Tipos_variacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variacao" ADD CONSTRAINT "Variacao_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Itens_lote" ADD CONSTRAINT "Itens_lote_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "Variacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Itens_lote" ADD CONSTRAINT "Itens_lote_lote_id_fkey" FOREIGN KEY ("lote_id") REFERENCES "Lote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_forma_pagamento_id_fkey" FOREIGN KEY ("forma_pagamento_id") REFERENCES "Formas_pagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Itens_pedido" ADD CONSTRAINT "Itens_pedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Itens_pedido" ADD CONSTRAINT "Itens_pedido_lote_id_fkey" FOREIGN KEY ("lote_id") REFERENCES "Lote"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Itens_pedido" ADD CONSTRAINT "Itens_pedido_kit_id_fkey" FOREIGN KEY ("kit_id") REFERENCES "Kit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kit" ADD CONSTRAINT "Kit_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Itens_kit" ADD CONSTRAINT "Itens_kit_kit_id_fkey" FOREIGN KEY ("kit_id") REFERENCES "Kit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Itens_kit" ADD CONSTRAINT "Itens_kit_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "Variacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmpresaToUsuario" ADD CONSTRAINT "_EmpresaToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmpresaToUsuario" ADD CONSTRAINT "_EmpresaToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LoteToVariacao" ADD CONSTRAINT "_LoteToVariacao_A_fkey" FOREIGN KEY ("A") REFERENCES "Lote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LoteToVariacao" ADD CONSTRAINT "_LoteToVariacao_B_fkey" FOREIGN KEY ("B") REFERENCES "Variacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Itens_pedidoToVariacao" ADD CONSTRAINT "_Itens_pedidoToVariacao_A_fkey" FOREIGN KEY ("A") REFERENCES "Itens_pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Itens_pedidoToVariacao" ADD CONSTRAINT "_Itens_pedidoToVariacao_B_fkey" FOREIGN KEY ("B") REFERENCES "Variacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Itens_kitToProduto" ADD CONSTRAINT "_Itens_kitToProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "Itens_kit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Itens_kitToProduto" ADD CONSTRAINT "_Itens_kitToProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
