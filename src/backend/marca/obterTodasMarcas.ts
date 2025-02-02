"use server";

import RepositorioMarca from "./RepositorioMarca";

export default async function obterTodasMarcas(){
  return RepositorioMarca.obterTodasMarcas();
}
