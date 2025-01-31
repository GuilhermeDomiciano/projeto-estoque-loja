import NextAuth from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import {findUser, getUserID} from "./lib/user";
import findEmpresa from "./lib/empresa";
import { Usuario } from "./src/backend/interfaces/Usuario";
import { Empresa } from "./src/backend/interfaces/Empresa";

// Interface do usuário
interface User extends Usuario {
  empresa?: Empresa | null; // Adicionando a empresa ao tipo User
}

declare module "next-auth" {
  interface User extends Usuario {
    empresa?: Empresa | null;  // A empresa é opcional no objeto User
  }

  interface Session {
    user?: User;
    empresa?: Empresa | null;  // Adicionando a empresa diretamente na sessão
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    nome?: string;
    login?: string;
    empresa?: Empresa | null;  // A empresa é mantida separada no token
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // Provedor de credenciais para Usuário
    Credentials({
      id: "user-login",
      name: "Usuário",
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      authorize: async (credentials): Promise<User | null> => {
        const user = await findUser(
          String(credentials?.username),
          String(credentials?.password)
        );
        return user ?? null;
      },
    }),

    // Provedor de credenciais para Empresa
    Credentials({
      id: "empresa-login",
      name: "Empresa",
      credentials: {
        id: { label: "ID", type: "text" },
        userId: { label: "User ID", type: "text" },  // Recebendo o ID do usuário como argumento
      },
      authorize: async (credentials): Promise<User | null> => {
        const empresa = await findEmpresa(Number(credentials?.id));
        const userId = credentials?.userId;  // Recebendo o ID do usuário
        

        if (!empresa || !userId) return null;
        const us = await getUserID(Number(userId));  // Buscando o usuário pelo ID
        if (!us) return null;
        // Agora estamos retornando um User com a empresa e o id do usuário incluídos
        const user: User = {
          id: String(us.id),  // Passando o ID do usuário
          nome: us.nome,
          login: us.login,
          empresa: empresa,  // A empresa é parte do objeto user
        };
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Quando o usuário ou empresa se autentica, salvamos as informações no token
      if (user) {
        token.id = user.id;
        token.nome = user.nome;
        token.login = user.login;
        token.empresa = user.empresa ?? null;  // Adicionando a empresa no token
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Salvando tanto os dados do usuário quanto os da empresa na sessão
      session.user = {
        id: token.id!,
        nome: token.nome!,
        login: token.login!,
        empresa: token.empresa ?? null,  // A empresa será carregada na sessão
      };
      session.empresa = token.empresa ?? null; // A empresa também pode estar no campo separado da sessão
      return session;
    },
  },
});
