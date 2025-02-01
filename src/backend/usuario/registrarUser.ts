'use server';

import { hashSync } from 'bcrypt-ts';
import db from '../../../lib/db';

export async function registrarUsuario(nome: string, login: string, senha: string, email: string): Promise<string | void> {
  if (!nome || !login || !senha || !email) {
    return "Preencha todos os campos obrigatórios.";
  }

  try {
    const usuarioExistente = await db.usuario.findFirst({
      where: { login },
    });

    if (usuarioExistente) {
      return "Usuário já existe.";
    }

    const emailExistente = await db.usuario.findFirst({
      where: { email },
    });

    if (emailExistente) {
      return "Email já está em uso.";
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
    return "Erro ao criar usuário.";
  } finally {
    await db.$disconnect();
  }
}
