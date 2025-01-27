import { Cliente } from "./Cliente";
import { Empresa } from "./Empresa";
import { Formas_pagamento } from "./Formas_pagamento";
import { Itens_pedido } from "./Itens_pedido";
import { Status } from "./Status";


export interface Pedido {
    id: string;
    valor_total: number;
    qt_total: number;
    status: string;
    forma_pagamento_id: Formas_pagamento;
    status_id: Status;
    cliente_id?: Cliente | null;
    empresa_id: Empresa;
    Itens_pedidos: Itens_pedido[];
}