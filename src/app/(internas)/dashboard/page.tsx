"use client";

import ListarEmpresas from "@/app/components/empresa/ListarEmpresas";
import Backend from "@/backend";
import { Empresa } from "@/core/model/Empresa";
import { useEffect, useState } from "react";

export default function Page() {
  const [empresas, setEmpresas] = useState<Empresa[]>([])
  const [empresa, setEmpresa] = useState<Partial<Empresa> | null>(null)

  async function salvarEmpresa() {
    if (!empresa) return
    await Backend.empresas.salvarEmpresa(empresa)
    const novasEmpresas = await Backend.empresas.obterTodas()
    setEmpresas(novasEmpresas || [])  // Garantir que seja um array
    setEmpresa(null)
  }

  useEffect(() => {
    Backend.empresas.obterTodas().then(empresas => setEmpresas(empresas || []))  // Garantir que seja um array
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Cadastrar Nova Empresa</h1>

      {/* Formulário de cadastro */}
      <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label htmlFor="razao_social" className="block text-sm font-medium text-gray-700">Razão Social</label>
            <input
              type="text"
              id="razao_social"
              name="razao_social"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={empresa?.razao_social || ""}
              onChange={(e) => setEmpresa({ ...empresa, razao_social: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">CNPJ</label>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={empresa?.cnpj || ""}
              onChange={(e) => setEmpresa({ ...empresa, cnpj: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={empresa?.telefone || ""}
              onChange={(e) => setEmpresa({ ...empresa, telefone: e.target.value })}
            />
          </div>

          <button
            type="button"
            onClick={salvarEmpresa}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Salvar Empresa
          </button>
        </form>
      </div>

      {/* Exibição da lista de empresas */}
      <ListarEmpresas empresas={empresas} />
    </div>
  )
}
