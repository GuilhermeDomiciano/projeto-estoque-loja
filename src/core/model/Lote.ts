import { Itens_lote } from "./Itens_lote";
import { Variacao } from "./Variacao";
import { Itens_pedido } from "./Itens_pedido";

export interface Lote {
  id: string;
  codigo: number;
  validade?: Date | null;
  itens: Itens_lote[];
  variacao: Variacao;
  Itens_pedido: Itens_pedido[]
}