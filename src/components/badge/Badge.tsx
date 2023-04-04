import './Badge.css'

type Props = {
    children: React.ReactNode
}

export function Badge({ children }: Props) {
    return (
        <span className='badge'>{children}</span>
    )
}