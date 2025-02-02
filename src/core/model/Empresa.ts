export interface Empresa {
  id:           number;  
  cnpj?:        string | null;  
  razao_social: string;
  telefone?:    string | null;
  ativa?:        boolean;
  produtos:     number[];
  pedidos:      number[];
  kits:         number[];
  usuarios:     number[];
  usuarioEmpresas: number[]
}
