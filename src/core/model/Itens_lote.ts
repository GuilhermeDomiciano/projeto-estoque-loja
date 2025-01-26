import { Lote, Variacao } from "@prisma/client";

export interface Itens_lote {
  id: string;
  variacao_id: string;
  lote_id: string;
  qt: number;
  codigo: number;
  data_validade: Date;
  variacao: Variacao;
  lote: Lote;
}