import { Empresa } from "@/core/model/Empresa";
import { PrismaClient } from "@prisma/client";

export default class RepositorioEmpresa{
    private static db: PrismaClient = new PrismaClient();

    static async salvarEmpresa(empresa: Empresa): Promise<Empresa> {
      const { produtos = [], pedidos = [], kits = [], usuarios = [], usuarioEmpresas = [], ...empresaSemId } = empresa;
    
      const createdEmpresa = await this.db.empresa.create({
        data: {
          ...empresaSemId, // Dados da empresa sem o id
          produtos: {
            connect: produtos.map((produtoId) => ({ id: produtoId })),
          },
          pedidos: {
            connect: pedidos.map((pedidoId) => ({ id: pedidoId })),
          },
          kits: {
            connect: kits.map((kitId) => ({ id: kitId })),
          },
          usuarios: {
            connect: usuarios.map((usuarioId) => ({ id: usuarioId })),
          },
          usuarioEmpresa: {
            connect: usuarioEmpresas.map((usuarioEmpresaId) => ({ id: usuarioEmpresaId })),
          },
        },
      });
    
      return {
        ...createdEmpresa,
        produtos,
        pedidos,
        kits,
        usuarios,
        usuarioEmpresas,
      };
    }
    

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

