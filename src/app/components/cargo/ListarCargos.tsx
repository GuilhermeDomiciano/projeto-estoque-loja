import { Cargo } from "@/core/model/Cargo"
import LinhaCargo from "./LinhaCargo"


export interface ListaCargoProps{
    cargos: Cargo[]
    onClick?: (Cargo: Cargo) => void
}

export default function ListarCargos(props:ListaCargoProps){
    return (
      <div>
          {props.cargos.map((Cargo: Cargo) => {
              return <LinhaCargo key={Cargo.id!} cargo={Cargo}/>
          })}
      </div>
    )
}
