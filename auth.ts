import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from './lib/db'; // Certifique-se de apontar para o módulo correto
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      authorize: async (credentials) => {
        // Buscar o usuário no banco de dados pelo login
        const user = await db.usuario.findFirst({
          where: { login: String(credentials.username) },
        });

        if (!user) {
          console.log("Usuário não encontrado.");
          return null;
        }

        // Verificar a senha fornecida em relação ao hash armazenado
        const isPasswordValid = bcrypt.compareSync(
          String(credentials.password),
          user.senha
        );

        if (isPasswordValid) {
          console.log("Login bem-sucedido!");
          return { id: String(user.id), name: user.nome, login: user.login }; 
        } else {
          console.log("Senha incorreta.");
          return null;
        }
      },
    }),
  ],
});
