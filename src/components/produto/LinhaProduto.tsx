import { Produto } from "@/core/model/Produto";

export interface LinhaProdutoProps{
  produto: Produto
}

export default function ListarProduto(props:LinhaProdutoProps){
  return (
    <div>
      <span>{props.produto.id} - {props.produto.descricao} - {props.produto.empresa_id} - {props.produto.marca_id}</span>
    </div>
  )
}
