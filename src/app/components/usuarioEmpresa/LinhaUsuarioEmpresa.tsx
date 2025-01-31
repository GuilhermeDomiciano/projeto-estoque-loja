import { UsuarioEmpresa } from "@/core/model/UsuarioEmpresa"


export interface LinhaUsuarioEmpresaProps{
  usuarioEmpresa: UsuarioEmpresa
}

export default function ListaUsuarioEmpresas(props: LinhaUsuarioEmpresaProps){
    return(
        <div>
            <div>
                <span>Id: {props.usuarioEmpresa.id} Id_Usuario:  {props.usuarioEmpresa.usuario_id} Id_Empresa: {props.usuarioEmpresa.empresa_id} Id_Cargo: {props.usuarioEmpresa.cargo_id}</span>
            </div>
        </div>
    )
}
