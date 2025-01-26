import { Itens_lote, Variacao } from "@prisma/client";

export interface Lote {
  id: string;
  variacao_id: string;
  variacao: Variacao;
  itens: Itens_lote[];
}