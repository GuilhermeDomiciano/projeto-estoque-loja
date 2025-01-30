import db from './db';
import bcrypt from "bcrypt";
import  {Usuario}  from '../src/backend/interfaces/Usuario';

export default async function findUser(login: string, senha: string): Promise<Usuario | null> {
        const user = await db.usuario.findFirst({
        where: { login: login },
        });

      if (!user) {
        console.log("Usuário não encontrado.");
        return null;
      }

      // Verificar a senha fornecida em relação ao hash armazenado
      const isPasswordValid = bcrypt.compareSync(
        String(senha),
        user.senha
      );

      if (isPasswordValid) {
        console.log("Login bem-sucedido!");
        const usuario: Usuario = { id: String(user.id), nome: user.nome, login: user.login };
        return usuario; 
      } else {
        console.log("Senha incorreta.");
        return null;
      }
}
