import obterTodos from "./usuario/obterTodos";
import { registrarUsuario } from "./usuario/registrarUser";

export default class Backend{
    static readonly usuarios ={
        obter: obterTodos,
        registrar: registrarUsuario
    }
}