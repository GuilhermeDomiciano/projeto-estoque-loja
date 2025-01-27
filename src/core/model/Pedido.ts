export interface Pedido {
    id: number;
    valor_total: number;
    qt_total: number;
    status: string;
    forma_pagamento_id: number;
    status_id: number;
    cliente_id?: number | null;
    empresa_id: number;
    Itens_pedidos: number[];
}