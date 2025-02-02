"use client";

import ListarCargos from "@/components/cargo/ListarCargos";
import FormularioEmpresas from "@/components/empresa/FormularioEmpresa";
import ListarEmpresas from "@/components/empresa/ListarEmpresas";
import ListarUsuarioEmpresa from "@/components/usuarioEmpresa/ListaUsuarioEmpresas";
import Backend from "@/backend";
import { Cargo } from "@/core/model/Cargo";
import { Empresa } from "@/core/model/Empresa";
import { UsuarioEmpresa } from "@/core/model/UsuarioEmpresa";
import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";

export default function Page() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [cargos, setCargos] = useState<Cargo[]>([]);
  const [usuarioEmpresas, setUsuarioEmpresas] = useState<UsuarioEmpresa[]>([]);
  const { data: session } = useSession();
  const user = session?.user;
  const usuarioId = user?.id ? Number(user.id) : null; 

  useEffect(() => {
    Backend.empresas.obterTodas().then(empresas => setEmpresas(empresas || []));
    Backend.cargos.obterTodos().then(cargos => setCargos(cargos || []));
    Backend.usuarioEmpresa.obterTodosUsuarioEmpresas().then(usuarioEmpresas => setUsuarioEmpresas(usuarioEmpresas || []));
  }, []);

  return (
    <div>
      <FormularioEmpresas empresas={empresas} setEmpresas={setEmpresas} usuarioId={usuarioId} />
    </div>
  );
}
