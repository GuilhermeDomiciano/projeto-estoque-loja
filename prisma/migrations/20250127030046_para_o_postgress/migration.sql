-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioEmpresa" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "empresa_id" TEXT NOT NULL,
    "cargo_id" TEXT NOT NULL,

    CONSTRAINT "UsuarioEmpresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "nome" TEXT NOT NULL,
    "telefone" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT,
    "razao_social" TEXT NOT NULL,
    "telefone" TEXT,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Marca" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Marca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipos_variacao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "Tipos_variacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "descricao" TEXT,
    "marca_id" TEXT NOT NULL,
    "empresa_id" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variacao" (
    "id" TEXT NOT NULL,
    "tipo_variacao_id" TEXT NOT NULL,
    "produto_id" TEXT NOT NULL,

    CONSTRAINT "Variacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lote" (
    "id" TEXT NOT NULL,
    "codigo" INTEGER NOT NULL,
    "validade" TIMESTAMP(3),

    CONSTRAINT "Lote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Itens_lote" (
    "id" TEXT NOT NULL,
    "variacao_id" TEXT NOT NULL,
    "lote_id" TEXT NOT NULL,
    "qt" INTEGER NOT NULL,
    "preco_compra" DECIMAL(65,30) NOT NULL,
    "preco_venda" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Itens_lote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formas_pagamento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cor" TEXT,
    "icone" TEXT,

    CONSTRAINT "Formas_pagamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" TEXT NOT NULL,
    "valor_total" DECIMAL(65,30) NOT NULL,
    "qt_total" INTEGER NOT NULL,
    "forma_pagamento_id" TEXT NOT NULL,
    "status_id" TEXT NOT NULL,
    "cliente_id" TEXT,
    "empresa_id" TEXT NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Itens_pedido" (
    "id" TEXT NOT NULL,
    "qt" INTEGER NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "pedido_id" TEXT NOT NULL,
    "lote_id" TEXT,
    "kit_id" TEXT,

    CONSTRAINT "Itens_pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kit" (
    "id" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "descricao" TEXT,
    "empresa_id" TEXT NOT NULL,

    CONSTRAINT "Kit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Itens_kit" (
    "id" TEXT NOT NULL,
    "qt" INTEGER NOT NULL,
    "kit_id" TEXT NOT NULL,
    "variacao_id" TEXT NOT NULL,

    CONSTRAINT "Itens_kit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "cor" TEXT,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EmpresaToUsuario" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EmpresaToUsuario_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_LoteToVariacao" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_LoteToVariacao_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Itens_pedidoToVariacao" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Itens_pedidoToVariacao_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Itens_kitToProduto" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Itens_kitToProduto_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");

-- CreateIndex
CREATE INDEX "_EmpresaToUsuario_B_index" ON "_EmpresaToUsuario"("B");

-- CreateIndex
CREATE INDEX "_LoteToVariacao_B_index" ON "_LoteToVariacao"("B");

-- CreateIndex
CREATE INDEX "_Itens_pedidoToVariacao_B_index" ON "_Itens_pedidoToVariacao"("B");

-- CreateIndex
CREATE INDEX "_Itens_kitToProduto_B_index" ON "_Itens_kitToProduto"("B");

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
