import React from 'react';

interface prop {
  id: number;
  nome: string;
  valor: number;
  marca: string;
  imagem: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

function ProductCard({ id, nome, valor, marca, imagem, onEdit, onDelete }: prop) {
  return (
    <div className="max-w-xl sm:w-[130px] md:w-[170px] lg:w-[200px] xl:w-[250px] max-h-xl sm:h-[190px] md:h-[230px] lg:h-[200px] xl:h-[310px] rounded-lg border border-gray-200 bg-white shadow-md">
      <img
        src={imagem}
        alt={nome}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{nome}</h3>
          <div className="flex space-x-5">
            <button
              onClick={() => onDelete(id)}
              className="text-red-500 hover:text-red-700"
              aria-label="Excluir"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              onClick={() => onEdit(id)}
              className="text-blue-500 hover:text-blue-700"
              aria-label="Editar"
            >
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
        </div>
        <p className="text-gray-600">{marca}</p>
        <p className="text-xl font-semibold text-gray-800">{`R$ ${valor.toFixed(2)}`}</p>
      </div>
    </div>
  );
}

export default ProductCard;
