import { Marca } from "@/core/model/Marca";

export interface LinhaMarcaProps{
  marca: Marca
}

export default function ListarMarca(props: LinhaMarcaProps){
  return (
    <div>
      <span>Id: {props.marca.id} - Nome: {props.marca.nome}</span>
    </div>
  )
}
