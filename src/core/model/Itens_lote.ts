import { Lote } from "./Lote";
import { Variacao } from "./Variacao";


export interface Itens_lote {
  id: string;
  variacao_id: string;
  lote_id: string;
  qt: number;
  preco_compra: number;
  preco_venda: number;
  variacao: Variacao;
  lote: Lote;
}