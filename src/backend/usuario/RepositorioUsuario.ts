import { Usuario } from "@/core/model/Usuario";
import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario{
    private static db: PrismaClient = new PrismaClient();

    static async obterTodos(): Promise<Usuario[]>{
        return await this.db.usuario.findMany();
    }
}