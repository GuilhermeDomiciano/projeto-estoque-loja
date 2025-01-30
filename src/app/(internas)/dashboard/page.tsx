"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";



export default  function Page() {
  const router = useRouter();
  const { data: session } = useSession();

  

  return (
    <div>
      <button 
        onClick={() => router.push("/cadastrarEmpresa")} 
        className="px-4 py-2"
      >
        Cadastrar Empresa
      </button>
<<<<<<< HEAD
      
      {session?.user?.nome}
=======
>>>>>>> 3db7c439b5bc0302f02f66db789a6d83a6aad372
    </div>
  );
}
