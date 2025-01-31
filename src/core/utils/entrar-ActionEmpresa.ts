'use server'

import { signIn } from '../../../../auth';

export default async function loginAction(id: string, idEmpresa: string) {
  try {
    const empresaFormData = new FormData();
    empresaFormData.append("id", idEmpresa); // ID da empresa
    empresaFormData.append("userId", id); // ID do usuário

    await signIn('empresa-login', empresaFormData);  
  } catch (error) {
    console.error(error);
  }
}
