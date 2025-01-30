"use client";

import ListarCargos from "@/app/components/cargo/ListarCargos";
import FormularioEmpresas from "@/app/components/empresa/FormularioEmpresa";
import ListarEmpresas from "@/app/components/empresa/ListarEmpresas";
import Backend from "@/backend";
import { Cargo } from "@/core/model/Cargo";
import { Empresa } from "@/core/model/Empresa";
import { useEffect, useState } from "react";

export default function Page(){
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [cargos, setCargos] = useState<Cargo[]>([]);

  useEffect(() => {
    Backend.empresas.obterTodas().then(empresas => setEmpresas(empresas || []));
    Backend.cargos.obterTodos().then(cargos => {
      console.log("Cargos recebidos:", cargos); 
      setCargos(cargos || []);
    });
  }, []);

  

  return (
    <div>
      <FormularioEmpresas empresas={empresas} setEmpresas={setEmpresas}/>
      <h1>Lista empresas:</h1>
      <ListarEmpresas empresas={empresas} />
      <h1>Lista cargos:</h1>
      <ListarCargos cargos={cargos} />
    </div>
  )
}
