import { useState, useCallback } from 'react'
import { Button, Input, ThemeProvider, createTheme, Checkbox } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import { TodoItem } from './components/todo-item/TodoItem'

import './App.css'

type Todo = {
  id: string
  text: string
  isCompleted: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodoText, setNewTodoText] = useState<string>('')

  return (
    <div className='app'>
      <h1>🚀 todo</h1>
      <form
        className='form-group'
        onSubmit={e => {
          e.preventDefault()

          if (!newTodoText) return

          const newTodo: Todo = {
            id: uuidv4(),
            text: newTodoText,
            isCompleted: false,
          }

          setTodos(currentTodos => [newTodo, ...currentTodos])
          setNewTodoText('')
        }}
      >
        <Input
          fullWidth
          color='primary'
          placeholder='Adicione uma nova tarefa'
          value={newTodoText}
          onChange={e => setNewTodoText(e.target.value)}
        />
        <Button disabled={newTodoText.length == 0} variant='contained' color='primary' type='submit'>
          Criar
        </Button>
      </form>

      {todos.length ? todos.map(todo => (
        <TodoItem key={todo.id} text={todo.text} />
      )) : <span>sem itens</span>}
    </div>
  )
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  )
}
