/*
  Warnings:

  - You are about to drop the column `produto_id` on the `Itens_kit` table. All the data in the column will be lost.
  - You are about to drop the column `codigo` on the `Itens_lote` table. All the data in the column will be lost.
  - You are about to drop the column `data_validade` on the `Itens_lote` table. All the data in the column will be lost.
  - You are about to drop the column `variacao_id` on the `Itens_pedido` table. All the data in the column will be lost.
  - You are about to drop the column `variacao_id` on the `Lote` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `Variacao` table. All the data in the column will be lost.
  - Added the required column `preco_compra` to the `Itens_lote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco_venda` to the `Itens_lote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codigo` to the `Lote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status_id` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Formas_pagamento" ADD COLUMN "cor" TEXT;
ALTER TABLE "Formas_pagamento" ADD COLUMN "icone" TEXT;

-- CreateTable
CREATE TABLE "Cargo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UsuarioEmpresa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usuario_id" TEXT NOT NULL,
    "empresa_id" TEXT NOT NULL,
    "cargo_id" TEXT NOT NULL,
    CONSTRAINT "UsuarioEmpresa_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsuarioEmpresa_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsuarioEmpresa_cargo_id_fkey" FOREIGN KEY ("cargo_id") REFERENCES "Cargo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Status" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "cor" TEXT
);

-- CreateTable
CREATE TABLE "_EmpresaToUsuario" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_EmpresaToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Empresa" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EmpresaToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LoteToVariacao" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_LoteToVariacao_A_fkey" FOREIGN KEY ("A") REFERENCES "Lote" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LoteToVariacao_B_fkey" FOREIGN KEY ("B") REFERENCES "Variacao" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_Itens_pedidoToVariacao" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Itens_pedidoToVariacao_A_fkey" FOREIGN KEY ("A") REFERENCES "Itens_pedido" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Itens_pedidoToVariacao_B_fkey" FOREIGN KEY ("B") REFERENCES "Variacao" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_Itens_kitToProduto" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Itens_kitToProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "Itens_kit" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Itens_kitToProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "Produto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "nome" TEXT NOT NULL,
    "telefone" TEXT
);
INSERT INTO "new_Cliente" ("email", "id", "nome", "telefone") SELECT "email", "id", "nome", "telefone" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");
CREATE TABLE "new_Empresa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT,
    "razao_social" TEXT NOT NULL,
    "telefone" TEXT
);
INSERT INTO "new_Empresa" ("cnpj", "id", "razao_social", "telefone") SELECT "cnpj", "id", "razao_social", "telefone" FROM "Empresa";
DROP TABLE "Empresa";
ALTER TABLE "new_Empresa" RENAME TO "Empresa";
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");
CREATE TABLE "new_Itens_kit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "qt" INTEGER NOT NULL,
    "kit_id" TEXT NOT NULL,
    "variacao_id" TEXT NOT NULL,
    CONSTRAINT "Itens_kit_kit_id_fkey" FOREIGN KEY ("kit_id") REFERENCES "Kit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Itens_kit_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "Variacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Itens_kit" ("id", "kit_id", "qt", "variacao_id") SELECT "id", "kit_id", "qt", "variacao_id" FROM "Itens_kit";
DROP TABLE "Itens_kit";
ALTER TABLE "new_Itens_kit" RENAME TO "Itens_kit";
CREATE TABLE "new_Itens_lote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "variacao_id" TEXT NOT NULL,
    "lote_id" TEXT NOT NULL,
    "qt" INTEGER NOT NULL,
    "preco_compra" DECIMAL NOT NULL,
    "preco_venda" DECIMAL NOT NULL,
    CONSTRAINT "Itens_lote_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "Variacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Itens_lote_lote_id_fkey" FOREIGN KEY ("lote_id") REFERENCES "Lote" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Itens_lote" ("id", "lote_id", "qt", "variacao_id") SELECT "id", "lote_id", "qt", "variacao_id" FROM "Itens_lote";
DROP TABLE "Itens_lote";
ALTER TABLE "new_Itens_lote" RENAME TO "Itens_lote";
CREATE TABLE "new_Itens_pedido" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "qt" INTEGER NOT NULL,
    "valor" DECIMAL NOT NULL,
    "pedido_id" TEXT NOT NULL,
    "lote_id" TEXT,
    "kit_id" TEXT,
    CONSTRAINT "Itens_pedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Itens_pedido_lote_id_fkey" FOREIGN KEY ("lote_id") REFERENCES "Lote" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Itens_pedido_kit_id_fkey" FOREIGN KEY ("kit_id") REFERENCES "Kit" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Itens_pedido" ("id", "pedido_id", "qt", "valor") SELECT "id", "pedido_id", "qt", "valor" FROM "Itens_pedido";
DROP TABLE "Itens_pedido";
ALTER TABLE "new_Itens_pedido" RENAME TO "Itens_pedido";
CREATE TABLE "new_Kit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valor" DECIMAL NOT NULL,
    "descricao" TEXT,
    "empresa_id" TEXT NOT NULL,
    CONSTRAINT "Kit_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Kit" ("descricao", "empresa_id", "id", "valor") SELECT "descricao", "empresa_id", "id", "valor" FROM "Kit";
DROP TABLE "Kit";
ALTER TABLE "new_Kit" RENAME TO "Kit";
CREATE TABLE "new_Lote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "codigo" INTEGER NOT NULL,
    "validade" DATETIME
);
INSERT INTO "new_Lote" ("id") SELECT "id" FROM "Lote";
DROP TABLE "Lote";
ALTER TABLE "new_Lote" RENAME TO "Lote";
CREATE TABLE "new_Pedido" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valor_total" DECIMAL NOT NULL,
    "qt_total" INTEGER NOT NULL,
    "forma_pagamento_id" TEXT NOT NULL,
    "status_id" TEXT NOT NULL,
    "cliente_id" TEXT,
    "empresa_id" TEXT NOT NULL,
    CONSTRAINT "Pedido_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pedido_forma_pagamento_id_fkey" FOREIGN KEY ("forma_pagamento_id") REFERENCES "Formas_pagamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pedido_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Pedido_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pedido" ("cliente_id", "empresa_id", "forma_pagamento_id", "id", "qt_total", "valor_total") SELECT "cliente_id", "empresa_id", "forma_pagamento_id", "id", "qt_total", "valor_total" FROM "Pedido";
DROP TABLE "Pedido";
ALTER TABLE "new_Pedido" RENAME TO "Pedido";
CREATE TABLE "new_Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "descricao" TEXT,
    "marca_id" TEXT NOT NULL,
    "empresa_id" TEXT NOT NULL,
    CONSTRAINT "Produto_marca_id_fkey" FOREIGN KEY ("marca_id") REFERENCES "Marca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Produto_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Produto" ("descricao", "empresa_id", "id", "marca_id") SELECT "descricao", "empresa_id", "id", "marca_id" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
CREATE TABLE "new_Tipos_variacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT
);
INSERT INTO "new_Tipos_variacao" ("descricao", "id", "nome") SELECT "descricao", "id", "nome" FROM "Tipos_variacao";
DROP TABLE "Tipos_variacao";
ALTER TABLE "new_Tipos_variacao" RENAME TO "Tipos_variacao";
CREATE TABLE "new_Variacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo_variacao_id" TEXT NOT NULL,
    "produto_id" TEXT NOT NULL,
    CONSTRAINT "Variacao_tipo_variacao_id_fkey" FOREIGN KEY ("tipo_variacao_id") REFERENCES "Tipos_variacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Variacao_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Variacao" ("id", "produto_id", "tipo_variacao_id") SELECT "id", "produto_id", "tipo_variacao_id" FROM "Variacao";
DROP TABLE "Variacao";
ALTER TABLE "new_Variacao" RENAME TO "Variacao";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_EmpresaToUsuario_AB_unique" ON "_EmpresaToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_EmpresaToUsuario_B_index" ON "_EmpresaToUsuario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LoteToVariacao_AB_unique" ON "_LoteToVariacao"("A", "B");

-- CreateIndex
CREATE INDEX "_LoteToVariacao_B_index" ON "_LoteToVariacao"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Itens_pedidoToVariacao_AB_unique" ON "_Itens_pedidoToVariacao"("A", "B");

-- CreateIndex
CREATE INDEX "_Itens_pedidoToVariacao_B_index" ON "_Itens_pedidoToVariacao"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Itens_kitToProduto_AB_unique" ON "_Itens_kitToProduto"("A", "B");

-- CreateIndex
CREATE INDEX "_Itens_kitToProduto_B_index" ON "_Itens_kitToProduto"("B");
