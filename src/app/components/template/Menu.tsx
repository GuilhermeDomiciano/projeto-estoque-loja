export interface MenuProps{
    children: React.ReactNode
}

export default function Menu(props: MenuProps) {
    return (
        <div>
            {props.children}
        </div>
    )
}