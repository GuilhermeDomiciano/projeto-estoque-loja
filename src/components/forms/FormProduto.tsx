'use client';

import React, { FormEvent, useState } from "react";
import Backend from "@/backend";
import { Produto } from "@/core/model/Produto";
import FormMarca from "../marca/CbxMarca";
import { Camera } from "lucide-react";

interface CadastroFormProps {
  handleSave: (item: Produto) => void;
  onClose: () => void;
  empresaId: number;
  marcas: { id: number; nome: string; empresa_Id: number }[];
}

const CadastroFormProduto = ({
  handleSave,
  onClose,
  empresaId,
  marcas,
}: CadastroFormProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | number>("");
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value as string;
    });

    formObject["selectedOption"] = selectedOption.toString();

    try {
      const produtoData: Produto = {
        descricao: formObject["descricao"],
        marca_id:
          typeof selectedOption === "string"
            ? parseInt(formObject["marca_id"] as string)
            : selectedOption,
        empresa_id: empresaId,
        img: null,
        variacoes: [],
        itens_kits: [],
      };

      const savedProduto = await Backend.produtos.salvarProduto(produtoData);
      handleSave(savedProduto);
      setMessage(`Formulário enviado com sucesso! Dados: ${JSON.stringify(savedProduto)}`);
    } catch (error) {
      setMessage("Erro ao salvar o produto.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <form className="flex flex-col h-full space-y-4 p-4" onSubmit={handleSubmit}>
      <div className="flex flex-1 gap-6">
        {/* Pré-visualização da imagem */}
        <div className="w-1/3 flex flex-col">

          <div className="mt-2 mb-4 w-full h-48 bg-gray-200 flex items-center justify-center border border-gray-300 rounded-md overflow-hidden">
            {imagePreview ? (
              <img src={imagePreview} alt="Pré-visualização" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500"><Camera className="w-12 h-12 text-gray-400" /></span>
            )}
          </div>
          <input
            id="foto"
            name="foto"
            type="file"
            required
            onChange={handleImageChange}
            className="w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
          />
        </div>
        
        {/* Campos do formulário */}
        <div className="w-2/3 flex flex-col space-y-4">
          <label className="block text-sm font-medium text-gray-900 mb-[-8px]">Descrição do Produto</label>
          <input
            id="descricao"
            name="descricao"
            type="text"
            required
            className="w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
          />
          <FormMarca empresaId={empresaId} selectedOption={selectedOption} setSelectedOption={setSelectedOption} marcas={marcas} />
        </div>
      </div>

      {message && <div className="mt-4 text-green-600">{message}</div>}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          Fechar
        </button>
        <button
          type="submit"
          disabled={loading}
          className={`py-2 px-4 rounded-md font-semibold transition-all ${loading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
        >
          {loading ? "Salvando..." : "Salvar Produto"}
        </button>
      </div>
    </form>
  );
};

export default CadastroFormProduto;