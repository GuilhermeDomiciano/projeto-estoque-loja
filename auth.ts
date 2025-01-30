import NextAuth from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import findUser from "./lib/user";
import { setUser } from "./lib/usuario";
import { Usuario } from "./src/backend/interfaces/Usuario";

// 🔹 Estendendo o tipo User do NextAuth para incluir os campos personalizados
declare module "next-auth" {
  interface User {
    id?: string | undefined;
    nome: string;
    login: string;
  }

  interface Session {
    user: Usuario;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    nome: string;
    login: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      authorize: async (credentials): Promise<Usuario | null> => {
        const user = await findUser(
          String(credentials?.username),
          String(credentials?.password)
        );
        if (!user) return null;

        setUser(user);
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Certificando que o 'user' contém os campos necessários
        token.id = String(user.id);
        token.nome = user.nome;
        token.login = user.login;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Atribuindo os dados do token à sessão
      session.user = {
        id: token.id,
        nome: token.nome,
        login: token.login,
      };
      return session;
    },
  },
});
