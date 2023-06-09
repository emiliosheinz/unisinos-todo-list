import { useEffect, useState } from 'react'
import { Button, Input, ThemeProvider, createTheme } from '@mui/material'
import Icon from '@mui/material/Icon'
import { v4 as uuidv4 } from 'uuid'
import { TodoItem } from './components/todo-item/TodoItem'
import { Logo } from './components/logo/Logo'
import { Badge } from './components/badge/Badge'
import { EmptyList } from './components/empty-list/EmptyList'

import './App.css'

const LOCAL_STORAGE_TODOS_KEY = 'todos'

export type Todo = {
  id: string
  text: string
  isCompleted: boolean
}

type AppProps = {
  persistedTodos?: Todo[]
}

function App({ persistedTodos }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(persistedTodos ?? [])
  const [newTodoText, setNewTodoText] = useState<string>('')

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todos))
  }, [todos])

  function onClickDelete(key: string) {
    setTodos(todos.filter(todo => todo.id != key))
  }

  function toggleTodoCompleted(id: string) {
    const newTodos = todos.map(todo => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isCompleted: !todo.isCompleted,
      }
    })

    setTodos(newTodos)
  }

  return (
    <div>
      <div className='app-header'>
        <Logo />
      </div>
      <div className='app'>
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
            className='todo-input'
            fullWidth
            color='primary'
            placeholder='Adicione uma nova tarefa'
            value={newTodoText}
            onChange={e => setNewTodoText(e.target.value)}
          />
          <Button
            disabled={newTodoText.length == 0}
            variant='contained'
            color='primary'
            type='submit'
            endIcon={<Icon>add_circle</Icon>}
            style={{ textTransform: 'none' }}
          >
            Criar
          </Button>
        </form>

        <div className='todo-header'>
          <div>
            <span>Tarefas criadas</span>
            <Badge>{todos.length}</Badge>
          </div>
          <div>
            <span>Concluídas</span>
            <Badge>
              {todos.filter(i => i.isCompleted).length} de {todos.length}
            </Badge>
          </div>
        </div>
        {todos.length ? (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onClickDelete={onClickDelete}
              onClickComplete={toggleTodoCompleted}
            />
          ))
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  )
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default () => {
  const persistedTodosString = localStorage.getItem(LOCAL_STORAGE_TODOS_KEY)
  const persistedTodos = JSON.parse(persistedTodosString || '[]')

  return (
    <ThemeProvider theme={darkTheme}>
      <App persistedTodos={persistedTodos} />
    </ThemeProvider>
  )
}
