export interface Variacao {
    id: number;
    tipo_variacao_id: number;
    produto_id: number;
    img?: string;
    itens_lotes: number[];
    itens_pedidos: number[];
    lote: number[];
    itens_kit: number[];
}