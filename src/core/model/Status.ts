export interface Status{
    id: number;
    nome: string;
    descricao?: string | null;
    cor?: string | null;
    pedidos: number[]
}