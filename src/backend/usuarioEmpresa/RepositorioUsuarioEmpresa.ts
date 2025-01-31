import { PrismaClient } from "@prisma/client";
import { UsuarioEmpresa } from "@/core/model/UsuarioEmpresa";

export default class RepositorioUsuarioEmpresa {
    private static db: PrismaClient = new PrismaClient();

    static async obterTodosUsuarioEmpresas(): Promise<UsuarioEmpresa[]> {
        const UsuarioEmpresa = await this.db.usuarioEmpresa.findMany({
            include: {
                usuario: true,
                empresa: true,
                cargo: true,
            },
        });
        return UsuarioEmpresa.map(usuarioEmpresa => ({
            ...usuarioEmpresa,
            id: Number(usuarioEmpresa.id),
            usuario_id: Number(usuarioEmpresa.usuario_id),
            empresa_id: Number(usuarioEmpresa.empresa_id),
            cargo_id: Number(usuarioEmpresa.cargo_id),
        }));
    }

    static async adicionarUsuarioEmpresa(usuarioEmpresa: Omit<UsuarioEmpresa, 'id'>): Promise<UsuarioEmpresa> {
        const createdUsuarioEmpresa = await this.db.usuarioEmpresa.create({
            data: {
                usuario_id: usuarioEmpresa.usuario_id,
                empresa_id: usuarioEmpresa.empresa_id,
                cargo_id: usuarioEmpresa.cargo_id,
            },
        });

        return {
            ...createdUsuarioEmpresa,
            id: Number(createdUsuarioEmpresa.id),
            usuario_id: Number(createdUsuarioEmpresa.usuario_id),
            empresa_id: Number(createdUsuarioEmpresa.empresa_id),
            cargo_id: Number(createdUsuarioEmpresa.cargo_id),
        };
    }
}
