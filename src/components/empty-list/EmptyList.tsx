import { EmptyListIcon } from './EmptyListIcon'

import './EmptyList.css'

export function EmptyList() {
    return (
        <div className='empty-list'>
            <div>
                <EmptyListIcon />
            </div>
            <div className='empty-list-text-container'>
                <span className='bold-text'>Você ainda não tem tarefas cadastradas</span>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}