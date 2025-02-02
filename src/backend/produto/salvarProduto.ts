"use server";

import { Produto } from "@/core/model/Produto";
import RepositorioProduto from "./RepositorioProduto";

export default async function salvarProduto(produto: Partial<Produto>){
  const novoProduto = {
    ...produto,
  };

  return RepositorioProduto.salvarProduto(novoProduto as Produto)
}
