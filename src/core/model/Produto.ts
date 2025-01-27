import { Empresa } from "./Empresa";
import { Itens_kit } from "./Itens_kit";
import { Marca } from "./Marca";
import { Variacao } from "./Variacao";

export interface Produto {
    id: string;
    descricao?: string | null;
    marca_id: Marca;
    empresa_id: Empresa;
    variacoes: Variacao[];
    itens_kits: Itens_kit[];
}