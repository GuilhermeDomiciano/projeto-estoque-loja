import { Empresa } from "@/core/model/Empresa";
import { PrismaClient } from "@prisma/client";

export default class RepositorioEmpresa{
    private static db: PrismaClient = new PrismaClient();

    // static async salvarEmpresa(empresa: Empresa): Promise<Empresa> {
    //   const { id, produtos, pedidos, kits, usuarios, usuarioEmpresas, ...dados } = empresa;
  
    //   if (id == null) {
    //       throw new Error("O campo 'id' é necessário para salvar ou atualizar uma empresa.");
    //   }
  
    //   const empresaSalva = await this.db.empresa.upsert({
    //       where: { id },
    //       update: {
    //           ...dados, // Campos simples do modelo
    //       },
    //       create: {
    //           ...dados, // Campos simples do modelo
    //       },
    //   });
  
    //   return {
    //       ...empresaSalva,
    //       id: Number(empresaSalva.id),
    //       produtos: empresa.produtos,
    //       pedidos: empresa.pedidos,
    //       kits: empresa.kits,
    //       usuarios: empresa.usuarios,
    //       usuarioEmpresas: empresa.usuarioEmpresas,
    //   };
    // }

    static async obterTodasEmpresas(): Promise<Empresa[]> {
      const empresas = await this.db.empresa.findMany({
          include: {
            produtos: true,
            pedidos: true,
            kits: true,
            usuarios: true,
            usuarioEmpresa: true,
          },
      });
      return empresas.map(empresa => ({
          ...empresa,
          id: Number(empresa.id),
          produtos: empresa.produtos.map(produto => produto.id),
          pedidos: empresa.pedidos.map(pedido => pedido.id),
          kits: empresa.kits.map(kit => kit.id),
          usuarios: empresa.usuarios.map(usuario => usuario.id),
          usuarioEmpresas: empresa.usuarioEmpresa.map(usuarioEmpresa => usuarioEmpresa.id),
      }));
    }
}

