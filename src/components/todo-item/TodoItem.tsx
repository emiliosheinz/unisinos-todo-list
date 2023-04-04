import './TodoItem.css'

type Props = {
    text: string
}

export function TodoItem({ text }: Props) {
    return (
        <div className='todo-item'>
            <div className='todo-text'>{text}</div>
        </div>
    )
}