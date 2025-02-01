import { Empresa } from "@/core/model/Empresa"


export interface LinhaempresaProps{
    empresa: Empresa
}

export default function ListaEmpresa(props: LinhaempresaProps){
    return(
      <div>
          <span>{props.empresa.razao_social} - {props.empresa.cnpj} - {props.empresa.telefone}</span>
      </div>
    )
}
