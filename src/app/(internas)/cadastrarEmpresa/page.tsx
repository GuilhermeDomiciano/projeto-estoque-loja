"use client";

import FormularioEmpresas from "@/components/forms/iniciais/FormEmpresa";
import Backend from "@/backend";
import { Empresa } from "@/core/model/Empresa";
import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";

export default function Page() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const { data: session } = useSession();
  const user = session?.user;
  const usuarioId = user?.id ? Number(user.id) : null; 

  useEffect(() => {
    Backend.empresas.obterTodas().then(empresas => setEmpresas(empresas || []));
  }, []);

  return (
    <div>
      <FormularioEmpresas empresas={empresas} setEmpresas={setEmpresas} usuarioId={usuarioId} />
    </div>
  );
}
