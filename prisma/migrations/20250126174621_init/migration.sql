-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "razao_social" TEXT NOT NULL,
    "telefone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Marca" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tipos_variacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "descricao" TEXT NOT NULL,
    "marca_id" TEXT NOT NULL,
    "empresa_id" TEXT NOT NULL,
    CONSTRAINT "Produto_marca_id_fkey" FOREIGN KEY ("marca_id") REFERENCES "Marca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Produto_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Variacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valor" TEXT NOT NULL,
    "tipo_variacao_id" TEXT NOT NULL,
    "produto_id" TEXT NOT NULL,
    CONSTRAINT "Variacao_tipo_variacao_id_fkey" FOREIGN KEY ("tipo_variacao_id") REFERENCES "Tipos_variacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Variacao_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "variacao_id" TEXT NOT NULL,
    CONSTRAINT "Lote_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "Variacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Itens_lote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "variacao_id" TEXT NOT NULL,
    "lote_id" TEXT NOT NULL,
    "qt" INTEGER NOT NULL,
    "codigo" REAL NOT NULL,
    "data_validade" DATETIME NOT NULL,
    CONSTRAINT "Itens_lote_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "Variacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Itens_lote_lote_id_fkey" FOREIGN KEY ("lote_id") REFERENCES "Lote" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Formas_pagamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valor_total" DECIMAL NOT NULL,
    "qt_total" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "forma_pagamento_id" TEXT NOT NULL,
    "cliente_id" TEXT NOT NULL,
    "empresa_id" TEXT NOT NULL,
    CONSTRAINT "Pedido_forma_pagamento_id_fkey" FOREIGN KEY ("forma_pagamento_id") REFERENCES "Formas_pagamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pedido_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pedido_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Itens_pedido" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "qt" INTEGER NOT NULL,
    "valor" DECIMAL NOT NULL,
    "pedido_id" TEXT NOT NULL,
    "variacao_id" TEXT NOT NULL,
    CONSTRAINT "Itens_pedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Itens_pedido_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "Variacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Kit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valor" DECIMAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "empresa_id" TEXT NOT NULL,
    CONSTRAINT "Kit_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Itens_kit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "qt" INTEGER NOT NULL,
    "kit_id" TEXT NOT NULL,
    "produto_id" TEXT NOT NULL,
    "variacao_id" TEXT NOT NULL,
    CONSTRAINT "Itens_kit_kit_id_fkey" FOREIGN KEY ("kit_id") REFERENCES "Kit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Itens_kit_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Itens_kit_variacao_id_fkey" FOREIGN KEY ("variacao_id") REFERENCES "Variacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");
