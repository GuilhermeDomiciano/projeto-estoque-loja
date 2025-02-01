import { Cargo } from "@/core/model/Cargo"


export interface LinhaCargoProps{
    cargo: Cargo
}

export default function ListarCargo(props: LinhaCargoProps){
  return(
    <div>
      <div>
        <span>{props.cargo.nome} - {props.cargo.descricao}</span>
      </div>
    </div>
  )
}
