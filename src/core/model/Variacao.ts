import { Itens_kit, Itens_lote, Itens_pedido, Lote, Produto, Tipos_variacao } from "@prisma/client";

export interface Variacao {
    id: string;
    valor: string;
    tipo_variacao_id: string;
    produto_id: string;
    tipo_variacao: Tipos_variacao;
    produto: Produto;
    itens_lotes: Itens_lote[];
    itens_pedidos: Itens_pedido[];
    Lote: Lote[];
    Itens_kit: Itens_kit[];
}