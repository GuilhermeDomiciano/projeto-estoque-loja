"use client"

import CadastrarUsuario from '@/app/components/login/CadastrarUsuario'
import Backend from '@/backend'
import { Usuario } from '@/core/model/Usuario'
import { useEffect, useState } from 'react'

export default function Page() {
    console.log('Componente Page renderizado');
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        console.log('Iniciando requisição de usuários...');
        Backend.usuarios.obter()
            .then((data) => {
                console.log('Usuários obtidos:', data);
                setUsuarios(data);
            })
            .catch((error) => {
                console.error('Erro ao obter usuários:', error);
            });
    }, []);

    if (usuarios){
        return //Isso aqui é so pra nao quebrar o vercel kkkkkk
    }

    return (
        <div>
            <CadastrarUsuario />
        </div>
    );
}