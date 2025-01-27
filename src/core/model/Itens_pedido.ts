import { Kit } from "./Kit";
import { Lote } from "./Lote";
import { Variacao } from "./Variacao";


export interface Itens_pedido {
    id: string;
    qt: number;
    valor: number;
    pedido_id: string;
    lote_id?: Lote | null;
    kit_id?: Kit | null;
    variacao: Variacao[];
}