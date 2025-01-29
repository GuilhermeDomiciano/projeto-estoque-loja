"use server";

import RepositorioEmpresa from "./RepositorioEmpresa";

export default async function obterTodasEmpresas(){
  return RepositorioEmpresa.obterTodasEmpresas();
}
