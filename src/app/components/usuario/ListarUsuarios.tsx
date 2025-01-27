import usuarios from "@/app/data/constants/usuarios";

export default function ListarUsuarios(){
    return (
        <div>
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
    )
}