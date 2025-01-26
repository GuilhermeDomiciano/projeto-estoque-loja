import { Empresa, Itens_kit, Marca, Variacao } from "@prisma/client";

export interface Produto {
    id: string;
    descricao: string;
    marca_id: string;
    empresa_id: string;
    marca: Marca;
    empresa: Empresa;
    variacoes: Variacao[];
    itens_kits: Itens_kit[];
}