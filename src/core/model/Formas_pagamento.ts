import { Pedido } from "./Pedido";

export interface Formas_pagamento {
  id: string;
  nome: string;
  cor?: string | null;
  icone?: string | null;
  pedidos: Pedido[];
}