import { Marca } from "@/core/model/Marca";
import { PrismaClient } from "@prisma/client";

export default class RepositorioMarca {
  private static db: PrismaClient = new PrismaClient();

  static async obterTodasMarcas(): Promise<Marca[]> {
    const marcas = await this.db.marca.findMany({
      include: {
        produtos: true,
      },
    });

    return marcas.map(marca =>({
      ...marca,
      id: Number(marca.id),
      produtos: marca.produtos.map(produto => produto.id)
    }));
  }
}
