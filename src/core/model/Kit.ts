import { Empresa, Itens_kit } from "@prisma/client";

export interface Kit {
    id: string;
    valor: number;
    descricao: string;
    empresa_id: string;
    empresa: Empresa;
    Itens_kit: Itens_kit[];
}