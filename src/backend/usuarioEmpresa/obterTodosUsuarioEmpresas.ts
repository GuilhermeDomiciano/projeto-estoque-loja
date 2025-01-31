"use server";

import RepositorioUsuarioEmpresa from "./RepositorioUsuarioEmpresa";

export default async function obterTodosUsuarioEmpresas(){
  return RepositorioUsuarioEmpresa.obterTodosUsuarioEmpresas();
}
