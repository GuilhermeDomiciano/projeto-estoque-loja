import { UsuarioEmpresa } from "@/core/model/UsuarioEmpresa"
import LinhaUsuarioEmpresa from "./LinhaUsuarioEmpresa"


export interface ListaUsuarioEmpresaProps{
    usuarioEmpresas: UsuarioEmpresa[]
    onClick?: (UsuarioEmpresa: UsuarioEmpresa) => void
}

export default function ListarUsuarioEmpresa(props:ListaUsuarioEmpresaProps){
  return (
    <div>
      {props.usuarioEmpresas.map((UsuarioEmpresa: UsuarioEmpresa) => {
          return <LinhaUsuarioEmpresa key={UsuarioEmpresa.id!} usuarioEmpresa={UsuarioEmpresa}/>
      })
      }
    </div>
  )
}
