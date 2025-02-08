import { Fornecedor } from "@/core/model/Fornecedor";
import { PrismaClient } from "@prisma/client";

export default class RepositorioFornecedor {
  private static db: PrismaClient = new PrismaClient();

  static async obterTodosFornecedores(): Promise<Fornecedor[]> {
    const fornecedores = await this.db.fornecedor.findMany({});

    return fornecedores.map(fornecedor => ({
      ...fornecedor,
      id: Number(fornecedor.id),
      empresa_Id: fornecedor.empresa_id
    }));
  }
}
