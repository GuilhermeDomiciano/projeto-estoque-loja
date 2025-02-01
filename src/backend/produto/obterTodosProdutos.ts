"use server";

import RepositorioProduto from "./RepositorioProduto";

export default async function obterTodosProdutos(){
  return RepositorioProduto.obterTodosProdutos();
}
