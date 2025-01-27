export interface Formas_pagamento {
  id: number;
  nome: string;
  cor?: string | null;
  icone?: string | null;
  pedidos: number[];
}