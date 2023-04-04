import { DeleteIcon } from '../delete-icon/DeleteIcon';

import './TodoItem.css'

type Props = {
    text: string,
    id: string,
    onClickDelete: Function
}

export function TodoItem({ text, id, onClickDelete }: Props) {
    return (
        <div className='todo-item' key={id}>
            <div className='todo-text'>{text}</div>
            <button className='delete-icon' onClick={() => onClickDelete(id)}>
                <DeleteIcon />
            </button>
        </div>
    )
}