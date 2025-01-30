// Pagina.tsx

import React from "react";

interface PostProps {
  id: number;
  nome: string;
  login: string;
}

const Pagina = ({ id, nome, login }: PostProps) => {
  return (
    <div className="flex min-h-screen">
      {/* Menu Lateral */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <ul>
          <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Dashboard</a></li>
          <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Perfil</a></li>
          <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Configurações</a></li>
        </ul>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Menu Superior */}
        <header className="bg-gray-800 text-white p-4">
          <div className="flex justify-between items-center">
            <div className="text-lg">Meu App</div>
            <div>
              <span>Bem-vindo, {nome}</span>
            </div>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold">Conteúdo</h1>
          <p>Id: {id}</p>
          <p>Login: {login}</p>
          <div>
            <p>Aqui vai o conteúdo da página.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pagina;
