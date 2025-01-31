export interface Empresa {
  id:           number;  
  cnpj?:         string | null;  
  razao_social: string;
  telefone?:     string | null;
  produtos:     number[];
  pedidos:      number[];
  kits:         number[];
  usuarios:     number[];
  usuarioEmpresas: number[]
}
