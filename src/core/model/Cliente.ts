import { Pedido } from "@prisma/client"

export interface Cliente {
    id:       string;  
    email:    string;  
    nome:     string;
    telefone: string;
    pedidos:  Pedido[]
}