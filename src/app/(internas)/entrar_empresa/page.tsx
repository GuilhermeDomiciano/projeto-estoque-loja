"use client";

import ListarEmpresasCadastradas from "@/app/components/usuarioEmpresa/ListarEmpresasCadastradas";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default  function Page() {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = Number(session?.user?.id)
  const empresaUser = session?.user?.empresa

  return (
    <div>
      <button onClick={() => router.push("/cadastrarEmpresa")} className="px-4 py-2">
        Cadastrar Empresa
      </button>
      <ListarEmpresasCadastradas userId={userId} />
    </div>
  );
}
