"use client"; // Marca este componente como um Client Component

import { FormEvent, useState } from "react";
import { registrarUsuario } from "@/backend/usuario/registrarUser"; // Importe a função diretamente
import { validarSenha } from "../../core/utils/ValidarSenha";
import { useRouter } from "next/navigation";

export default function CadastrarUsuario() {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const nome = formData.get("nome")?.toString() ?? "";
    const login = formData.get("username")?.toString() ?? "";
    const senha = formData.get("password")?.toString() ?? "";
    const confirmarSenha = formData.get("confirmarSenha")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";

    const validacaoSenha = validarSenha(senha);
    if (!validacaoSenha.valida){
      setErrorMessage(validacaoSenha.mensagem || "Senha inválida");
      return;
    }

    if (senha !== confirmarSenha) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    try {
      const response = await registrarUsuario(nome, login, senha, email);
      if (response === "Usuário já existe.") {
        setErrorMessage("Nome de usuário já está em uso.");
      } else if (response === "Email já está em uso.") {
        setErrorMessage("Email já está em uso.");
      } else {
        alert("Usuário cadastrado com sucesso!");
        setErrorMessage("");
        router.push("/entrar")
      }
    } catch (error) {
      setErrorMessage("Erro ao cadastrar o usuário.");
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Cadastre-se
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-900">
              Nome
            </label>
            <div className="mt-2">
              <input
                id="nome"
                name="nome"
                type="text"
                required
                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-900">
              Nome de Usuário
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Senha
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-900">
              Confirmar Senha
            </label>
            <div className="mt-2">
              <input
                id="confirmarSenha"
                name="confirmarSenha"
                type="password"
                required
                className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {errorMessage && (
            <div className="mb-4 text-center text-sm text-red-600">{errorMessage}</div>
          )}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cadastrar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Já tem conta?{' '}
          <a href="../../entrar" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Faça o login
          </a>
        </p>
      </div>
    </div>
  );
}
