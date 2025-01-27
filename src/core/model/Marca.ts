import { Produto } from "./Produto";

export interface Marca {
    id:       string; 
    nome:     string;
    produtos: Produto[]
}