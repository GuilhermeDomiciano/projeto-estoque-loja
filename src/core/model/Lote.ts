export interface Lote {
  id: string;
  codigo: number;
  validade?: Date | null;
  itens: number[];
  variacao: number[];
  Itens_pedido: number[]
}