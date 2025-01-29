"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <button 
        onClick={() => router.push("/cadastrarEmpresa")} 
        className="px-4 py-2"
      >
        Cadastrar Empresa
      </button>
    </div>
  );
}
