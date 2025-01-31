"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ListarEmpresasCadastradas from "@/app/components/usuarioEmpresa/ListarEmpresasCadastradas";


export default  function Page() {
  const router = useRouter();
  const { data: session } = useSession();
 const userId = Number(session?.user?.id)

  return (
    <div>
      <button onClick={() => router.push("/cadastrarEmpresa")} className="px-4 py-2">
        Cadastrar Empresa
      </button>
      <hr />

      {userId && <ListarEmpresasCadastradas userId={userId}/>}
    </div>
  );
}
