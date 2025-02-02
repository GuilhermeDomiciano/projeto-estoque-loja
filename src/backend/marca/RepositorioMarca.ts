import { Marca } from "@/core/model/Marca";
import { PrismaClient } from "@prisma/client";

export default class RepositorioMarca {
  private static db: PrismaClient = new PrismaClient();

  static async obterTodasMarcas(): Promise<Marca[]> {
    const marcas = await this.db.marca.findMany({
      include: {
        produtos: true,
        empresa: true,  
      },
    });

    return marcas.map(marca => ({
      ...marca,
      id: Number(marca.id),
      empresa_Id: marca.empresa_id,  // Adiciona o id da empresa
      produtos: marca.produtos.map(produto => produto.id),
    }));
  }

  static async salvarMarca(marca: Marca): Promise<Marca> {
    const { produtos = [], empresa_Id, ...marcaSemId } = marca; 

    const createdMarca = await this.db.marca.create({
      data: {
        ...marcaSemId,
        empresa_id: empresa_Id, 
        produtos: {
          connect: produtos.map((produtoId) => ({ id: produtoId })),
        },
      },
    });

    return {
      ...createdMarca,
      produtos,
      empresa_Id,
    };
  }
}
