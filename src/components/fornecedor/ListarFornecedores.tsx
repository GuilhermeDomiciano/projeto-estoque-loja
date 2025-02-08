import { Fornecedor } from "@/core/model/Fornecedor";
import LinhaFornecedor from "./LinhaFornecedor";

export interface ListaFornecedorProps{
  fornecedores: Fornecedor[]
  onClick?: (Fornecedor: Fornecedor) => void
}

export default function ListarFornecedores(props: ListaFornecedorProps){
  return(
    <div>
      {props.fornecedores.map((Fornecedor: Fornecedor) => {
        return <LinhaFornecedor key={Fornecedor.id} fornecedor={Fornecedor}/>
      })}
    </div>
  )
}
