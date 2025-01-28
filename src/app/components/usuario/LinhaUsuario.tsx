import { Usuario } from "@/core/model/Usuario"

export interface LinhaUsuarioProps{
    usuario: Usuario
}

export default function ListaUsuario(props: LinhaUsuarioProps){
    return(
        <div>
            <div>
                <span>{props.usuario.nome} - {props.usuario.login} - {props.usuario.senha}</span>
            </div>
        </div>
    )
}