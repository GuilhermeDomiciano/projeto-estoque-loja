import { Empresa } from "./Empresa";
import { UsuarioEmpresa } from "./UsuarioEmpresa";

export interface Usuario {
    id: number;  
    nome: string; 
    login: string; 
    senha: string;
    empresas?: Empresa[] | null;
    UsuarioEmpresas?: UsuarioEmpresa[] | null;
}