// user.ts

interface User {
    id: string;
    nome: string;
    login: string;
  }
  
  // Declarar globalmente o 'user' em globalThis
  declare global {
    // eslint-disable-next-line no-var
    var user: User | undefined;
  }
  
  export function setUser(u: User) {
    globalThis.user = u;
  }
  
  export function getUser() {
    return globalThis.user;
  }
  
export {user};
  