export interface Itens_pedido {
    id: number;
    qt: number;
    valor: number;
    pedido_id: number;
    lote_id?: number | null;
    kit_id?: number | null;
    variacao: number[];
}