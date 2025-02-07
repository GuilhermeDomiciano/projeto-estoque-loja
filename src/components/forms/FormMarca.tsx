'use client';

import React, { FormEvent, useState } from "react";
import Backend from "@/backend";
import { Marca } from "@/core/model/Marca";

interface CadastroFormMarcaProps {
  handleSave: (item: Marca) => void;
  onClose: () => void;
  empresa_id: number;
  marcas: Marca[];
}

const CadastroFormMarca = ({ handleSave, onClose, empresa_id }: CadastroFormMarcaProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.log("Formulario enviado");

    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value as string;
    });

    console.log("Enviado:", formObject);

    try {
      const marcaData: Marca = {
        nome: formObject["nome"],
        empresa_Id: empresa_id,
        produtos: []
      };

      const savedMarca = await Backend.marcas.salvarMarca(marcaData);
      handleSave(savedMarca);
      setMessage(`Formulário enviado com sucesso! Dados: ${JSON.stringify(savedMarca)}`);
    } catch (error) {
      setMessage("Erro ao salvar a marca.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-900">
          Nome da Marca
        </label>
        <div className="mt-2">
          <input
            id="nome"
            name="nome"
            type="text"
            required
            className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
          />
        </div>
      </div>

      {message && (
        <div className="mt-4 text-green-600">
          {message}
        </div>
      )}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-600"
        >
          Fechar
        </button>

        <button
          type="submit"
          disabled={loading}
          className={`py-2 px-4 rounded-md font-semibold transition-all ${loading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
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
      </div>
    </form>
  );
};

export default CadastroFormMarca;
