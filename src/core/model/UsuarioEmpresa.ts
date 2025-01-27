import { Cargo } from "./Cargo";
import { Empresa } from "./Empresa";
import { Usuario } from "./Usuario";

export interface UsuarioEmpresa {
    id: string;
    usuario_id: Usuario;
    empresa_id: Empresa;
    cargo_id: Cargo;

}