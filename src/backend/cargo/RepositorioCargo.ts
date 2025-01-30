import { Cargo } from "@/core/model/Cargo";
import { PrismaClient } from "@prisma/client";

export default class RepositorioEmpresa {
  private static db: PrismaClient = new PrismaClient();

  static async obterTodosCargos(): Promise<Cargo[]> {
    const cargos = await this.db.cargo.findMany({
      include: { usuarios: true }, 
    });

    return cargos.map(cargo => ({
      ...cargo,
      id: Number(cargo.id),
      usuarios: cargo.usuarios.map(cargo => cargo.id), 
    }));
  }
}
