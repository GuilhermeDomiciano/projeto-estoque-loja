export interface Kit {
    id: number;
    valor: number;
    descricao?: string | null;
    empresa_id: number;
    Itens_kit: number[];
    Itens_pedido: number[]
}