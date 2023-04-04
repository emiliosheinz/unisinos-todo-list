import { useState, useCallback } from 'react'

import './TodoItem.css'

type Props = {
    text: string,
    children?: React.ReactNode;
}

export function TodoItem({ text, children }: Props) {
    return (
        <div className='todo-item'>
            <div className='todo-text'>{text}</div>
        </div>
    )
}