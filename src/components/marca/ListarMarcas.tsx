import { Marca } from "@/core/model/Marca";
import LinhaMarca from "./LinhaMarca";

export interface ListaMarcaProps{
  marcas: Marca[]
  onClick?: (Marca: Marca) => void
}

export default function ListarMarcas(props: ListaMarcaProps){
  return (
    <div>
      {props.marcas.map((Marca: Marca) =>{
        return <LinhaMarca key={Marca.id} marca={Marca}/>
      })}
    </div>
  )
}
