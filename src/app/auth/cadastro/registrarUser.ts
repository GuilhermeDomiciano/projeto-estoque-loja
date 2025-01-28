'use server';

import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt-ts';

export default async function registrarUser(formData: FormData) {
  if (!formData) {
    console.error('Nenhum dado recebido do formulário.');
    return;
  }

  // Converter os dados do FormData para um objeto
  const nome = formData.get('nome');
  const senha = formData.get('password')?.toString();
  const login = formData.get('username');

  // Garantir que todos os campos obrigatórios estão presentes
  if (!nome || !senha || !login) {
    console.error('Preencha todos os campos');
    return;
  }

  const db = new PrismaClient();

  try {
    

    // Hashear a senha antes de armazenar
    const hashedPassword = hashSync(senha, 10);

    // Criar o usuário no banco de dados
    await db.usuario.create({
      data: {
        nome: nome.toString(),
        login: login.toString(),
        senha: hashedPassword, // Usando a senha hasheada
      },
    }).catch((error) => {
      console.error('Erro ao criar usuário:', error);
      throw error;
    });

    console.log('Usuário criado com sucesso');
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  } finally {
    await db.$disconnect();
  }
}
