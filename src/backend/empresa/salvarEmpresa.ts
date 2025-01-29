"use server";

import RepositorioEmpresa from './RepositorioEmpresa';

export default async function salvarEmpresa(){
    return RepositorioEmpresa.salvarEmpresa;
}
