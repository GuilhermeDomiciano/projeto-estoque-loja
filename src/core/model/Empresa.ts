import { Kit, Pedido, Produto } from "@prisma/client";

export interface Empresa {
    id:           string;  
    cnpj:         string;  
    razao_social: string;
    telefone:     string;
    produtos:     Produto[]
    pedidos:      Pedido[]
    kits:         Kit[]
}