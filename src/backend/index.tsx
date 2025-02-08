import obterTodasCargos from "./cargo/obterTodosCargos";
import obterTodasEmpresas from "./empresa/obterTodasEmpresas";
import salvarEmpresa from "./empresa/salvarEmpresa";
import obterTodosFornecedores from "./fornecedor/obterTodosForneceodres";
import obterTodasMarcas from "./marca/obterTodasMarcas";
import salvarMarca from "./marca/salvarMarca";
import obterTodosProdutos from "./produto/obterTodosProdutos";
import salvarProduto from "./produto/salvarProduto";
import obterTodos from "./usuario/obterTodos";
import { registrarUsuario } from "./usuario/registrarUser";
import obterTodosUsuarioEmpresas from "./usuarioEmpresa/obterTodosUsuarioEmpresas";

export default class Backend{
    static readonly usuarios ={
      obter: obterTodos,
      registrar: registrarUsuario
    }
    static readonly empresas ={
      obterTodas: obterTodasEmpresas,
      salvarEmpresa: salvarEmpresa,
    }
    static readonly cargos = {
      obterTodos: obterTodasCargos
    }
    static readonly usuarioEmpresa = {
      obterTodosUsuarioEmpresas: obterTodosUsuarioEmpresas
    }
    static readonly produtos = {
      obterTodosProdutos: obterTodosProdutos,
      salvarProduto: salvarProduto
    }
    static readonly marcas = {
      obterTodasMarcas: obterTodasMarcas,
      salvarMarca: salvarMarca
    }
    static readonly fornecedores = {
      obterTodosFornecedores: obterTodosFornecedores
    }
}
