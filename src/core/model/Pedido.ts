import { Formas_pagamento, Cliente, Empresa, Itens_pedido } from "@prisma/client";

export interface Pedido {
    id: string;
    valor_total: number;
    qt_total: number;
    status: string;
    forma_pagamento_id: string;
    cliente_id: string;
    empresa_id: string;
    forma_pagamento: Formas_pagamento;
    cliente: Cliente;
    empresa: Empresa;
    itens_pedidos: Itens_pedido[];
}