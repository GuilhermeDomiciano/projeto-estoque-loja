import obterTodasEmpresas from "./empresa/obterTodasEmpresas";
// import salvarEmpresa from "./empresa/salvarEmpresa.ts.bak";
import obterTodos from "./usuario/obterTodos";
import { registrarUsuario } from "./usuario/registrarUser";

export default class Backend{
    static readonly usuarios ={
      obter: obterTodos,
      registrar: registrarUsuario
    }
    static readonly empresas ={
      obterTodas: obterTodasEmpresas,
      // salvarEmpresa: salvarEmpresa,
    }
}
