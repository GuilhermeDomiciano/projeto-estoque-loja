"use client";

import Backend from "@/backend";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      {/* <ListarEmpresas empresas={empresas}/> */}
      <button 
        onClick={() => router.push("/cadastrarEmpresa")} 
        className="px-4 py-2"
      >
        Cadastrar Empresa
      </button>
    </div>
  );
}
