import { Produto } from "@/core/model/Produto"
import LinhaProduto from "./LinhaProduto"

export interface ListaProdutoProps{
  produtos: Produto[]
  onClick?: (Produto: Produto) => void
}

export default function ListarProdutos(props:ListaProdutoProps){
  return (
    <div>
      {props.produtos.map((Produto: Produto) => {
        return <LinhaProduto key={Produto.id!} produto={Produto}/>
      })}
    </div>
  )
}
