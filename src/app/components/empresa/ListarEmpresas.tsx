import { Empresa } from "@/core/model/Empresa"
import LinhaEmpresa from "./LinhaEmpresa"


export interface ListaEmpresaProps{
    empresas: Empresa[]
    onClick?: (Empresa: Empresa) => void
}

export default function ListarEmpresas(props:ListaEmpresaProps){
    return (
        <div>
            {props.empresas.map((Empresa: Empresa) => {
                return <LinhaEmpresa key={Empresa.id!} empresa={Empresa}/>
            })
            }
        </div>
    )
}
