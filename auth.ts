import NextAuth, { NextAuthOptions } from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import findUser from "./lib/user";
import { setUser } from "./lib/usuario";
import { Usuario } from "./src/backend/interfaces/Usuario";

// 🔹 Sobrescrevendo os tipos do NextAuth para incluir os campos personalizados
declare module "next-auth" {
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



export const authOptions: NextAuthOptions  = {
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
    async jwt({ token, user }: { token: JWT; user?: Usuario }) {
      if (user) {
        token.id = user.id;
        token.nome = user.nome;
        token.login = user.login;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = {
        id: token.id,
        nome: token.nome,
        login: token.login,
      };
      return session;
    },
  },
};

// 🔹 Exportação correta do NextAuth
export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
