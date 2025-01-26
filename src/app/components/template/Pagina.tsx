export interface PaginaProps{
    children: React.ReactNode
}

export default function Pagina(props: PaginaProps) {
    return (
        <div>
            {props.children}
        </div>
    )
}