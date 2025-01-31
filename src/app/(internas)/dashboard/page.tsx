"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import loginAction from "@/app/(internas)/dashboard/entrar-ActionEmpresa";

export default  function Page() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleUserLogin = async () => {
    await loginAction(String(session?.user?.id)); // Chama a função loginAction quando o botão for clicado
  };

  return (
    <div>
      <button onClick={() => router.push("/cadastrarEmpresa")} className="px-4 py-2">
        Cadastrar Empresa
      </button>

      <hr />
      <button  onClick={handleUserLogin} className="px-4 py-2">
        Cadastrar Usuário
      </button>

      <hr />
      {session?.user?.nome} - {session?.empresa?.razao_social}
    </div>
  );
}
