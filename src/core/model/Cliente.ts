import { Pedido } from "./Pedido";

export interface Cliente {
    id:       string;  
    email:    string;  
    nome:     string;
    telefone: string;
    pedidos:  Pedido[]
}