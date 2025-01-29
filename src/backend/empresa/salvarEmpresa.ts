"use server";

import { Empresa } from '@/core/model/Empresa';
import RepositorioEmpresa from './RepositorioEmpresa';

export default async function salvarEmpresa(empresa: Partial<Empresa>) {
    const novaEmpresa = {
      ...empresa,
    };
    return RepositorioEmpresa.salvarEmpresa(novaEmpresa as Empresa);
}
