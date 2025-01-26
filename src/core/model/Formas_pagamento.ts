import { Pedido } from "@prisma/client";

export interface Formas_pagamento {
  id: string;
  nome: string;
  pedidos: Pedido[];
}