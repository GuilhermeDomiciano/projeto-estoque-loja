import { Kit } from "./Kit";
import { Produto } from "./Produto";
import { Variacao } from "./Variacao";


export interface Itens_kit {
    id: string;
    qt: number;
    kit_id: string;
    variacao_id: string;
    kit: Kit;
    variacao: Variacao;
    produto: Produto[];
}