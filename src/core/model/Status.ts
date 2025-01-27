import { Pedido } from "./Pedido";

export interface Status{
    id: string;
    nome: string;
    descricao?: string | null;
    cor?: string | null;
    pedidos: Pedido[]
}