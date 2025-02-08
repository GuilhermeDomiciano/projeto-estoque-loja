import { Fornecedor } from "@/core/model/Fornecedor";

export interface LinhaFornecedorProps{
  fornecedor: Fornecedor
}

export default function ListarFornecedor(props: LinhaFornecedorProps){
  return(
    <div>
      <span>Id: {props.fornecedor.id} - Razão Social: {props.fornecedor.razao_social} - CNPJ: {props.fornecedor.cnpj || "Vazio"} - Empresa: {props.fornecedor.empresa_Id} - Endereço {props.fornecedor.endereco || "Vazio"}</span>
    </div>
  )
}
