import Backend from "@/backend";
import { Empresa } from "@/core/model/Empresa";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface FormularioEmpresaProps {
  empresas: Empresa[];
  setEmpresas: (empresas: Empresa[]) => void;
  usuarioId: number | null;
}

export default function FormularioEmpresas(props: FormularioEmpresaProps) {
  const [empresa, setEmpresa] = useState<Partial<Empresa>>({});
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const router = useRouter();

  async function salvarEmpresa() {
    setErro(null);
    if (!empresa?.razao_social?.trim()) {
      setErro("O campo Razão Social é obrigatório.");
      return;
    }

    setLoading(true);

    try {
      if (props.usuarioId !== null) {
        await Backend.empresas.salvarEmpresa(empresa, props.usuarioId);
      } else {
        throw new Error("Usuário ID não pode ser nulo.");
      }
      const novasEmpresas = await Backend.empresas.obterTodas();
      props.setEmpresas(novasEmpresas || []);

      setEmpresa({});
      router.push("/home");
    } catch (error) {
      console.error("Erro ao salvar empresa:", error);
      setErro("Ocorreu um erro ao salvar a empresa. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex py-10 items-start justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Cadastro de Empresa</h2>

        {erro && <p className="text-red-600 bg-red-100 p-2 rounded-md mb-4 text-center">{erro}</p>}

        <form className="space-y-5">
          <div>
            <label htmlFor="razao_social" className="block text-sm font-medium text-gray-700">
              Razão Social <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="razao_social"
              name="razao_social"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all outline-none"
              value={empresa.razao_social || ""}
              onChange={(e) => setEmpresa({ ...empresa, razao_social: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">
              CNPJ (Opcional)
            </label>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all outline-none"
              value={empresa.cnpj || ""}
              onChange={(e) => setEmpresa({ ...empresa, cnpj: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
              Telefone (Opcional)
            </label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all outline-none"
              value={empresa.telefone || ""}
              onChange={(e) => setEmpresa({ ...empresa, telefone: e.target.value })}
            />
          </div>

          <button
            type="button"
            onClick={salvarEmpresa}
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              loading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-500"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3m-3 3l-3-3m7 3h4a8 8 0 01-8 8v-4l-3 3m3-3l3 3"
                  ></path>
                </svg>
                Salvando...
              </span>
            ) : (
              "Salvar Empresa"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
