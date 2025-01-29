// user.ts
interface User {
  id: string;
  nome: string;
  login: string;
}
let user: User | undefined;

export function setUser(u: User) {
user = u;
}

export function getUser() {
return user;
}

export { user }; // Caso queira exportar diretamente
