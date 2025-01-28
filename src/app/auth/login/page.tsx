"use client";

import Login from "@/app/components/login/login";
import ListarUsuarios from "@/app/components/usuario/ListarUsuarios";
import Backend from "@/backend";
import { Usuario } from "@/core/model/Usuario";
import { useEffect, useState } from "react";

export default function Home() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    Backend.usuarios.obter().then(setUsuarios)
  }, [])
  
  return (
    <div>
      <Login />
      <h1 className="text-5xl">Lista de usuarios:</h1>
      <span>Isso é temporário thalison, eu vou tirar eventualmente</span>
      <ListarUsuarios usuarios={usuarios}/>
    </div>
    
  );
}
