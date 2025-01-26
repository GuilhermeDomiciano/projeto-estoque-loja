import { Produto } from "@prisma/client";

export interface Marca {
    id:       string; 
    nome:     string;
    produtos: Produto[]
}