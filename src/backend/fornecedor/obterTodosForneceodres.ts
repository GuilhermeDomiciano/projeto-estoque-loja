"use server";

import RepositorioFornecedor from "./RepositorioFornecedor";

export default async function obterTodosFornecedores(){
  return RepositorioFornecedor.obterTodosFornecedores();
}
