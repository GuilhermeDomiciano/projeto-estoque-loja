'use client';

import React, { FormEvent, useState } from "react";// Ajuste o caminho conforme necessário

interface CadastroFormProps {
  handleSave: (item: Record<string, string>) => void;
  onClose: () => void;
}

const CadastroForm = ({
  handleSave,
  onClose,
}: CadastroFormProps) => {

  const [message, setMessage] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState(""); // Estado para armazenar a opção selecionada
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Formulario enviado");

    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value as string;
    });

    // Inclui a opção selecionada no envio dos dados
    formObject["selectedOption"] = selectedOption;

    console.log("Enviado:", formObject);
    handleSave(formObject);

    setMessage(`Formulário enviado com sucesso! Dados: ${JSON.stringify(formObject)}`);
    setLoading(false)
    
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-900">
          Nome de Usuário
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="text"
            required
            className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
          Senha
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
          />
        </div>
      </div>

      {/* ComboBox - Select */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-900">
          Função
        </label>
        <div className="mt-2">
          <select
            id="role"
            name="role"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            required
            className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
          >
            <option value="">Selecione uma função</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuário</option>
            <option value="moderator">Moderador</option>
          </select>
        </div>
      </div>

      {/* Exibindo a mensagem, se houver */}
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
            className={` py-2 px-4 rounded-md font-semibold transition-all   ${
              loading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
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
              "Salvar Produto"
            )}
          </button>

      </div>
    </form>
  );
};

export default CadastroForm;
