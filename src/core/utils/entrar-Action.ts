'use server'


import {signIn} from '../../../auth';
import { AuthError } from "next-auth";

export async function authenticate(
  formData: FormData
) {
  try {
    await signIn('user-login', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Credenciais inválidas';
        default:
          return 'Erro desconhecido';
      }
    }
    throw error;
  }
}