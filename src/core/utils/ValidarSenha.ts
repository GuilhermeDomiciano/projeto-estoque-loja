export function validarSenha(senha: string): { valida: boolean; mensagem?: string } {
  if (senha.length < 8) {
    return { valida: false, mensagem: "A senha deve ter pelo menos 8 caracteres." };
  }

  if (!/[A-Z]/.test(senha)) {
    return { valida: false, mensagem: "A senha deve conter pelo menos uma letra maiúscula." };
  }

  if (!/[0-9]/.test(senha)) {
    return { valida: false, mensagem: "A senha deve conter pelo menos um número." };
  }

  if (!/[+\-!@#$%^&*(),.?":{}|<>]/.test(senha)) {
    return { valida: false, mensagem: "A senha deve conter pelo menos um símbolo." };
  }

  return { valida: true };
}
