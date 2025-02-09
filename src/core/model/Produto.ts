export interface Produto {
    id?: number;
    descricao?: string | null;
    marca_id: number;
    empresa_id: number;
    img?: string;
    variacoes: number[];
    itens_kits: number[];
}
