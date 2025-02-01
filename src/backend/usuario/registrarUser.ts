'use server';

import { hashSync } from 'bcrypt-ts';
import db from '../../../lib/db';

export async function registrarUsuario(nome: string, login: string, senha: string, email: string): Promise<void> {
  if (!nome || !login || !senha || !email) {
    console.error('Preencha todos os campos obrigatórios.');
    return;
  }

  try {
    // Verificar se o usuário já existe
    const usuarioExistente = await db.usuario.findFirst({
      where: { login },
    });

    if (usuarioExistente) {
      console.error('Usuário já existe.');
      return;
    }

    // Hashear a senha
    const hashedPassword = hashSync(senha, 10);

    // Criar o usuário
    await db.usuario.create({
      data: {
        nome,
        login,
        senha: hashedPassword,
        email
      },
    });

    console.log('Usuário criado com sucesso.');
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  } finally {
    await db.$disconnect();
  }
}
