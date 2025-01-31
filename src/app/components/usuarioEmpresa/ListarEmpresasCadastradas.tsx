"use client";

import Backend from "@/backend";
import { Empresa } from "@/core/model/Empresa";
import { UsuarioEmpresa } from "@/core/model/UsuarioEmpresa";
import { Cargo } from "@/core/model/Cargo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ListarEmpresasCadastradasProps {
  userId: number;
}

export default function ListarEmpresasCadastradas({ userId }: ListarEmpresasCadastradasProps) {
  const router = useRouter();
  const [empresas, setEmpresas] = useState<(Empresa & { cargo: string })[]>([]);
  const [loading, setLoading] = useState(true); // Estado para carregamento

  useEffect(() => {
    async function fetchEmpresas() {
      if (!userId) return;

      try {
        setLoading(true); // Define o estado como carregando
        const usuarioEmpresas: UsuarioEmpresa[] = await Backend.usuarioEmpresa.obterTodosUsuarioEmpresas();
        const empresasDoUsuario = usuarioEmpresas.filter(ue => ue.usuario_id === userId);

        const cargos: Cargo[] = await Backend.cargos.obterTodos(); // Obtém todos os cargos

        const empresasDetalhes = await Promise.all(empresasDoUsuario.map(async (ue) => {
          const todasEmpresas = await Backend.empresas.obterTodas();
          const empresaEncontrada = todasEmpresas.find(e => e.id === ue.empresa_id);
          const cargoNome = cargos.find(c => c.id === ue.cargo_id)?.nome || "Desconhecido";

          return empresaEncontrada ? { ...empresaEncontrada, cargo: cargoNome } : null;
        }));

        setEmpresas(empresasDetalhes.filter(Boolean) as (Empresa & { cargo: string })[]);
      } catch (error) {
        console.error("Erro ao buscar empresas:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    fetchEmpresas();
  }, [userId]);

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <p className="text-gray-500 text-lg">Carregando empresas...</p>
      ) : empresas.length === 0 ? (
        <p className="text-gray-500 text-lg">Nenhuma empresa cadastrada.</p>
      ) : (
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
      )}
    </div>
  );
}
