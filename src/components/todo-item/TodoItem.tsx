import { Todo } from '../../App';
import { DeleteIcon } from '../delete-icon/DeleteIcon';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import './TodoItem.css'

type Props = {
    todo: Todo;
    onClickDelete: (id: string) => void;
    onClickComplete: (id: string) => void;
}

export function TodoItem({ todo, onClickDelete, onClickComplete }: Props) {
    return (
        <div className='todo-item' key={todo.id}>
            <button className='checkbox-container' onClick={() => onClickComplete(todo.id)}>
                {todo.isCompleted ? <CheckCircleRoundedIcon /> : <div />}
            </button>
            <div className={todo.isCompleted ? 'todo-text-completed' : 'todo-text'}>{todo.text}</div>
            <button className='delete-icon' onClick={() => onClickDelete(todo.id)}>
                <DeleteIcon />
            </button>
        </div>
    )
}