"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import usuarios from "@/app/data/constants/usuarios";

export default function Login() {
  const [loginData, setLoginData] = useState({
    login: "",
    senha: "",
  });

  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = usuarios.find(
      (user) => user.login === loginData.login && user.senha === loginData.senha
    );

    if (user) {
      setMessage("Login bem-sucedido");
      setTimeout(() => {
        router.push("/dashboard"); // Redirecionar para a página de dashboard
      }, 1000);
    } else {
      setMessage("Credenciais inválidas");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="login"
          value={loginData.login}
          onChange={handleChange}
          placeholder="Login"
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="senha"
          value={loginData.senha}
          onChange={handleChange}
          placeholder="Senha"
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}

      {/* Link para a página de cadastro */}
      <div className="mt-4 text-center">
        <p>Não tem uma conta?</p>
        <button
          onClick={() => router.push("/cadastro")}
          className="text-blue-500 hover:text-blue-700"
        >
          Cadastre-se aqui
        </button>
      </div>
    </div>
  );
}
