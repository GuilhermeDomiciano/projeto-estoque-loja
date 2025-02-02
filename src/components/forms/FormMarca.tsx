import { Marca } from "@/core/model/Marca";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Backend from "@/backend"

export interface FormularioMarcaProps{
  marcas: Marca[];
  setMarcas: (marcas: Marca[]) => void;
}

export default function FormularioMarcas(props: FormularioMarcaProps){
  const [marca, setMarca] = useState<Partial<Marca>>({});
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const router = useRouter();

  async function salvarMarca() {
    setErro(null);
    if (!marca?.nome?.trim()) {
      setErro("O campo Nome é obrigatório.");
      return;
    }

    setLoading(true);

    try {
      await Backend.marcas.salvarMarca(marca);
      const novasMarcas = await Backend.marcas.obterTodasMarcas();
      props.setMarcas(novasMarcas || []);

      setMarca({});
      router.push("/home");
    } catch (error) {
      console.error("Erro ao salvar marca:", error);
      setErro("Ocorreu um erro ao salvar a marca. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex py-10 items-start justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Cadastro de Marca</h2>

        {erro && <p className="text-red-600 bg-red-100 p-2 rounded-md mb-4 text-center">{erro}</p>}

        <form className="space-y-5">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome da Marca <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all outline-none"
              value={marca.nome || ""}
              onChange={(e) => setMarca({ ...marca, nome: e.target.value })}
            />
          </div>

          <button
            type="button"
            onClick={salvarMarca}
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
              "Salvar Marca"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
