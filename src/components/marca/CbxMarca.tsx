import React from 'react';

interface FormMarcaProps {
  empresaId: number;
  selectedOption: string | number; 
  setSelectedOption: React.Dispatch<React.SetStateAction<string | number>>; 
  marcas: { id: number; nome: string; empresa_Id: number }[]; 
}

const FormMarca = ({ empresaId, selectedOption, setSelectedOption, marcas }: FormMarcaProps) => {
  const marcasFiltradas = marcas.filter((marca) => marca.empresa_Id === empresaId);

  return (
    <div>
      <label htmlFor="marca_id" className="block text-sm font-medium text-gray-900">
        Marca do Produto
      </label>
      <div className="mt-2">
        <select
          id="marca_id"
          name="marca_id"
          value={String(selectedOption)} 
          onChange={(e) => setSelectedOption(e.target.value)} 
          required
          className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        >
          <option value="">Selecione uma marca</option>
          {marcasFiltradas.map((marca) => (
            <option key={marca.id} value={marca.id}>
              {marca.nome}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormMarca;
