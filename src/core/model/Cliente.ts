export interface Cliente {
    id:       number;  
    email?:    string | null;  
    nome:     string;
    telefone?: string | null;
    pedidos:  number[]
}