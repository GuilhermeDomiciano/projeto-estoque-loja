"use server";

import RepositorioCargo from "./RepositorioCargo";

export default async function obterTodasCargos(){
  return RepositorioCargo.obterTodosCargos();
}
