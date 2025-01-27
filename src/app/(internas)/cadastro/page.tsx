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

    return (
        <div>
            <CadastrarUsuario />
            <h2>Lista de Usuários</h2>
            <ul>
                {usuarios.length > 0 ? (
                    usuarios.map((usuario) => (
                        <li key={usuario.id}>
                            <strong>{usuario.nome}</strong> - {usuario.login}
                        </li>
                    ))
                ) : (
                    <li>Não há usuários cadastrados.</li>
                )}
            </ul>
        </div>
    );
}