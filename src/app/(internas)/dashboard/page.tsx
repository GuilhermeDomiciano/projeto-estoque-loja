"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


export default  function Page() {
  const router = useRouter();
  const { data: session } = useSession();

 

  return (
    <div>
      <button onClick={() => router.push("/cadastrarEmpresa")} className="px-4 py-2">
        Cadastrar Empresa
      </button>

      <hr />
      
      {session?.user?.nome} - {session?.empresa?.razao_social}
    </div>
  );
}
