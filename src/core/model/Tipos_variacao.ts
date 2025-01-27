import { Variacao } from "./Variacao";

export interface Tipos_variacao {
    id:   string; 
    nome: string;
    descricao?: string | null;
    variacoes: Variacao[]
}