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

  static async salvarMarca(marca: Marca): Promise<Marca> {
    const { produtos = [], ...marcaSemId} = marca;

    const createdMarca = await this.db.marca.create({
      data: {
        ...marcaSemId,
        produtos: {
          connect: produtos.map((produtoId) => ({id: produtoId})),
        },
      },
    });

    return {
      ...createdMarca,
      produtos,
    }
  }
}
