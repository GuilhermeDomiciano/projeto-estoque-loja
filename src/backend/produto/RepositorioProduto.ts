import { Produto } from "@/core/model/Produto";
import { PrismaClient } from "@prisma/client";

export default class RepositorioProduto {
  private static db: PrismaClient = new PrismaClient();

  static async obterTodosProdutos(): Promise<Produto[]> {
    const produtos = await this.db.produto.findMany({
      include: {
        variacoes: true,
        itens_kits: true,
      },
    });

    return produtos.map(produto => ({
      ...produto,
      id: Number(produto.id),
      variacoes: produto.variacoes.map(variacao => variacao.id),
      itens_kits: produto.itens_kits.map(item_kit => item_kit.id),
    }));
  }
}
