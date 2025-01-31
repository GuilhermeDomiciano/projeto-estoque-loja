import Backend from "@/backend"
import { Empresa } from "@/core/model/Empresa"
import { useRouter } from "next/navigation"
import { useState } from "react"

export interface FormularioEmpresaProps {
  empresas: Empresa[]
  setEmpresas: (empresas: Empresa[]) => void
  usuarioId: number | null
}

export default function FormularioEmpresas(props: FormularioEmpresaProps) {
  const [empresa, setEmpresa] = useState<Partial<Empresa>>({})
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const router = useRouter()

  async function salvarEmpresa() {
    setErro(null) 
    if (!empresa?.razao_social?.trim()) {
      setErro("O campo Razão Social é obrigatório.")
      return
    }

    setLoading(true)

    try {
      if (props.usuarioId !== null) {
        await Backend.empresas.salvarEmpresa(empresa, props.usuarioId)
      } else {
        throw new Error("UsuarioId não pode ser nulo.")
      }
      const novasEmpresas = await Backend.empresas.obterTodas()
      props.setEmpresas(novasEmpresas || [])

      setEmpresa({})
      router.push("/dashboard")
    } catch (error) {
      console.error("Erro ao salvar empresa:", error)
      setErro("Ocorreu um erro ao salvar a empresa. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      {erro && <p className="text-red-500 mb-4">{erro}</p>}

      <form>
        <div className="mb-4">
          <label htmlFor="razao_social" className="block text-sm font-medium text-gray-700">Razão Social *</label>
          <input
            type="text"
            id="razao_social"
            name="razao_social"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={empresa.razao_social || ""}
            onChange={(e) => setEmpresa({ ...empresa, razao_social: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">CNPJ (Opcional)</label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={empresa.cnpj || ""}
            onChange={(e) => setEmpresa({ ...empresa, cnpj: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone (Opcional)</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={empresa.telefone || ""}
            onChange={(e) => setEmpresa({ ...empresa, telefone: e.target.value })}
          />
        </div>

        <button
          type="button"
          onClick={salvarEmpresa}
          disabled={loading}
          className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Salvando..." : "Salvar Empresa"}
        </button>
      </form>
    </div>
  )
}
