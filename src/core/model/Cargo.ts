import { UsuarioEmpresa } from "./UsuarioEmpresa";

export interface Cargo {
    id: string;
    nome: string;
    descricao: string;
    usuarios: UsuarioEmpresa[];
}