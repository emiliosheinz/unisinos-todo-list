import { useState } from 'react'

import './App.css'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>Unisinos Todo List</h1>
      <h3>{count}</h3>
      <div className='buttons'>
        <Button onClick={() => setCount(c => c - 1)}>Decrement</Button>
        <Button onClick={() => setCount(c => c + 1)}>Increment</Button>
      </div>
    </div>
  )
}

export default App
