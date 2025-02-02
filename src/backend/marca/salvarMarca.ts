"use server"

import { Marca } from "@/core/model/Marca";
import RepositorioMarca from "./RepositorioMarca";

export default async function salvarMarca(marca: Partial<Marca>){
  const novaMarca = {
    ...marca,
  };
  return RepositorioMarca.salvarMarca(novaMarca as Marca);
}
