import { UsuarioEmpresa } from "@prisma/client";
import { Kit } from "./Kit";
import { Pedido } from "./Pedido";
import { Produto } from "./Produto";
import { Usuario } from "./Usuario";

export interface Empresa {
    id:           string;  
    cnpj?:         string | null;  
    razao_social: string;
    telefone?:     string | null;
    produtos:     Produto[];
    pedidos:      Pedido[];
    kits:         Kit[];
    usuarios:     Usuario[];
    usuarioEmpresas: UsuarioEmpresa[]
}