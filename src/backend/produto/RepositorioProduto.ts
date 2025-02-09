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
      img: produto.img ?? "", 
      variacoes: produto.variacoes.map(variacao => variacao.id),
      itens_kits: produto.itens_kits.map(item_kit => item_kit.id),
    }));
  }

  static async salvarProduto(produto: Produto): Promise<Produto> {
    // Define img como string vazia se não for fornecida
    const { variacoes = [], itens_kits = [], img = "", ...produtoSemId } = produto;

    const createdProduto = await this.db.produto.create({
      data: {
        ...produtoSemId,
        img: img || "", // Garante que img seja uma string vazia
        variacoes: {
          connect: variacoes.map((variacaoId) => ({ id: variacaoId })),
        },
        itens_kits: {
          connect: itens_kits.map((itemKitId) => ({ id: itemKitId })),
        },
      },
    });

    return {
      ...createdProduto,
      img: createdProduto.img || "", // Garante que img seja uma string vazia
      variacoes,
      itens_kits,
    };
  }
}
