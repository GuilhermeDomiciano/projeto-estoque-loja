export interface Usuario {
    id: number;  
    nome: string; 
    login: string; 
    senha: string;
    empresas?: number[] | null;
    UsuarioEmpresas?: number[] | null;
}