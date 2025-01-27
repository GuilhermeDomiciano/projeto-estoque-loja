import { Empresa } from "./Empresa";
import { Itens_kit } from "./Itens_kit";
import { Itens_pedido } from "./Itens_pedido";


export interface Kit {
    id: string;
    valor: number;
    descricao?: string | null;
    empresa_id: Empresa;
    Itens_kit: Itens_kit[];
    Itens_pedido: Itens_pedido[]
}