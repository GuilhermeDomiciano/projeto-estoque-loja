"use client";

import FormularioEmpresas from "@/app/components/empresa/FormularioEmpresa";
import ListarEmpresas from "@/app/components/empresa/ListarEmpresas";
import Backend from "@/backend";
import { Empresa } from "@/core/model/Empresa";
import { useEffect, useState } from "react";

export default function Page(){
  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  useEffect(() => {
    Backend.empresas.obterTodas().then(empresas => setEmpresas(empresas || []));
  }, []);

  return (
    <div>
      <FormularioEmpresas empresas={empresas} setEmpresas={setEmpresas}/>
      <h1>Lista empresas:</h1>
      <ListarEmpresas empresas={empresas} />
    </div>
  )
}
