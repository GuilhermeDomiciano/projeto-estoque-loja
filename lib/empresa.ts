import db from './db';
import  {Empresa}  from '../src/backend/interfaces/Empresa';

export default async function findEmpresa(id: number): Promise<Empresa | null> {
        const emp = await db.empresa.findFirst({
        where: { id: id },
        });

      if (!emp) {
        console.log("Empresa não encontrado.");
        return null;
      }

      console.log("Empresa encontrada!", emp);
      return {id: emp.id, cnpj: String(emp.cnpj), razao_social: emp.razao_social, telefone: String(emp.telefone), ativa: emp.ativa};
      
}
