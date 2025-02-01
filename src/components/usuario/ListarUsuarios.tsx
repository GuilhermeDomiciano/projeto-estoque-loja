import { Usuario } from "@/core/model/Usuario"
import LinhaUsuario from "./LinhaUsuario"

export interface ListaUsuarioProps{
    usuarios: Usuario[]
    onClick?: (usuario: Usuario) => void
}

export default function ListarUsuarios(props:ListaUsuarioProps){
    return (
        <div>
            {props.usuarios.map((usuario: Usuario) => {
                return <LinhaUsuario key={usuario.id!} usuario={usuario}/>
            })
            }
        </div>
    )
}