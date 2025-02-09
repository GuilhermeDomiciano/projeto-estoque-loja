export interface Usuario {
    id: number;  
    nome: string; 
    login: string; 
    senha: string;
    email: string;
    img?:    string | null;
    empresas?: number[] | null;
    UsuarioEmpresas?: number[] | null;
}
