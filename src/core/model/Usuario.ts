export interface Usuario {
    id: number;  
    nome: string; 
    login: string; 
    senha: string;
    email: string;
    empresas?: number[] | null;
    UsuarioEmpresas?: number[] | null;
}
