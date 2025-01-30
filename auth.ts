import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import findUser  from './lib/user';
import {setUser}  from './lib/usuario';


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await findUser(String(credentials.username), String(credentials.password));
        if (!user){
          return null
        }
        setUser(user);
        return  {nome:user.nome, login:user.login, id:user.id};
      },
    }),
  ],
});
