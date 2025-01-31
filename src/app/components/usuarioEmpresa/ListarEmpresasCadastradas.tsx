"use client";

import Backend from "@/backend";
import { Empresa } from "@/core/model/Empresa";
import { UsuarioEmpresa } from "@/core/model/UsuarioEmpresa";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface ListarEmpresasCadastradasProps{
  userId: number;
}

export default function ListarEmpresasCadastradas({userId}: ListarEmpresasCadastradasProps){
  const router = useRouter();
  const [empresas, setEmpresas] = useState<(Empresa & {cargo: string})[]>([]);
  
  useEffect(() => {
    async function fetchEmpresas() {
      if (!userId) return;

      try {
        const usuarioEmpresas: UsuarioEmpresa[] = await Backend.usuarioEmpresa.obterTodosUsuarioEmpresas();
        const empresasDoUsuario = usuarioEmpresas.filter(ue => ue.usuario_id === userId);

        const empresasDetalhes = await Promise.all(empresasDoUsuario.map(async (ue) => {
          const empresa = await Backend.empresas.obterTodas();
          const empresaEncontrada = empresa.find(e => e.id === ue.empresa_id);
          
          return empresaEncontrada ? { ...empresaEncontrada, cargo: ue.cargo_id.toString() } : null;
        }));

        setEmpresas(empresasDetalhes.filter(Boolean) as (Empresa & { cargo: string })[]);
      } catch (error) {
        console.error("Erro ao buscar empresas:", error);
      }
    }
    fetchEmpresas();
  }, [userId]);

  return (
    <div className="flex flex-wrap gap-4">
      {empresas.map((empresa) => (
        <div
          key={empresa.id}
          className="p-4 border rounded-lg shadow cursor-pointer w-64 bg-white hover:shadow-lg transition"
          onClick={() => router.push(`/empresa/${empresa.id}`)}
        >
          <h2 className="text-lg font-bold">{empresa.razao_social}</h2>
          {empresa.cnpj && <p><strong>CNPJ:</strong> {empresa.cnpj}</p>}
          {empresa.telefone && <p><strong>Telefone:</strong> {empresa.telefone}</p>}
          <p><strong>Cargo:</strong> {empresa.cargo}</p>
        </div>
      ))}
    </div>
  );
}
