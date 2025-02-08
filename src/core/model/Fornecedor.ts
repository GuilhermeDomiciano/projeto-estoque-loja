export interface Fornecedor{
  id?: number;
  cnpj?: string | null;
  razao_social: string;
  telefone?: string | null;
  endereco?: string | null;
  empresa_Id: number;
}
