"use client";

import ListarEmpresas from "@/app/components/empresa/ListarEmpresas";
import Backend from "@/backend";
import { Empresa } from "@/core/model/Empresa";
import { useEffect, useState } from "react";

export default function Page() {
  const [empresas, setEmpresas] = useState<Empresa[]>([])

  useEffect(() => {
    Backend.empresas.obterTodas().then(setEmpresas)
  }, [])

  return (
    <div>
      <ListarEmpresas empresas={empresas}/>
    </div>
  )
}
