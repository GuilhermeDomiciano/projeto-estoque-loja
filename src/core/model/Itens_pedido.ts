import { Pedido, Variacao } from "@prisma/client";

export interface Itens_pedido {
    id: string;
    qt: number;
    valor: number;
    pedido_id: string;
    variacao_id: string;
    pedido: Pedido;
    variacao: Variacao;
}