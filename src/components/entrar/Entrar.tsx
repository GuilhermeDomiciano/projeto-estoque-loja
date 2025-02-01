'use client';

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

export default function Entrar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (session?.user) {
      router.push("/entrar_empresa");
    }
  }, [session, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    
    const formData = new FormData(event.currentTarget);
    
    try {
      const result = await signIn('user-login', {
        redirect: false,
        username: formData.get('username') as string,
        password: formData.get('password') as string,
      });

      if (result?.error) {
        if (result.error.includes("CredentialsSignin")) {
          setErrorMessage("Usuário ou senha inválidos. Verifique os dados e tente novamente.");
        } else if (result.error.includes("UserNotFound")) {
          setErrorMessage("Usuário não encontrado. Verifique o nome de usuário.");
        } else {
          setErrorMessage("Erro ao realizar login. Tente novamente mais tarde.");
        }
        return;
      }
      
      router.refresh(); // Atualiza a sessão
    } catch (error) {
      setErrorMessage("Erro inesperado ao tentar fazer login.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Faça o login na sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                Nome de Usuário
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Senha
                </label>
                <div className="text-sm">
                  <a href="entrar/senha" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="mb-4 text-center text-sm text-red-600">{errorMessage}</div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Não tem conta?{' '}
            <a href="../../cadastro" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
