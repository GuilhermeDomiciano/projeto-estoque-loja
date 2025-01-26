import { Variacao } from "@prisma/client";

export interface Tipos_variacao {
    id:   string; 
    nome: string;
    descricao: string;
    variacoes: Variacao[]
}