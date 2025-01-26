import { Kit, Produto, Variacao } from "@prisma/client";

export interface Items_kit {
    id: string;
    qt: number;
    kit_id: string;
    produto_id: string;
    variacao_id: string;
    kit: Kit;
    produto: Produto;
    variacao: Variacao;
}