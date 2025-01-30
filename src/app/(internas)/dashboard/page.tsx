"use client";

import { useRouter } from "next/navigation";

interface User {
  id: number;
  nome: string;
  login: string;
}

// Aqui definimos a interface corretamente para o componente receber as props
interface PageProps {
  user: User;
}

export default function Page({ user }: PageProps) {
  const router = useRouter();

  // Função que mostra o ID do usuário
  const verEmpresa = () => {
    console.log("ID do Usuário:", user?.id);
  };

  return (
    <div>
      <button
        onClick={() => router.push("/cadastrarEmpresa")}
        className="px-4 py-2"
      >
        Cadastrar Empresa
      </button>

      {/* Chamando a função dentro de um evento (exemplo de onClick) */}
      <button onClick={verEmpresa} className="px-4 py-2 mt-4">
        Ver Empresa
      </button>
    </div>
  );
}
