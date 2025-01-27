"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import usuarios from "@/app/data/constants/usuarios";

export default function CadastrarUsuario() {
  const [formData, setFormData] = useState({
    id: 0,
    nome: "",
    login: "",
    senha: "",
  });

  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const exists = usuarios.some((user) => user.login === formData.login);
    if (exists) {
      setMessage("Usuário já cadastrado");
      return;
    }

    formData.id = (usuarios.length + 1);
    usuarios.push(formData);

    setMessage("Usuário cadastrado com sucesso");
    setFormData({
      id: 0,
      nome: "",
      login: "",
      senha: "",
    });

    // Redirecionar para a página de login após 2 segundos
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  const navigateToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Cadastrar Novo Usuário</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="login"
          value={formData.login}
          onChange={handleChange}
          placeholder="Login"
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Senha"
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Cadastrar
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
      <button
        onClick={navigateToLogin}
        className="mt-4 text-blue-500 underline text-sm"
      >
        Já tem uma conta? Faça login
      </button>
    </div>
  );
}
