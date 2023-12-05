import { useState } from 'react'
import Todos from './components/Todos'

const mockTodos = [
  { id: 1, text: 'Learn TypeScript', completed: true },
  { id: 2, text: 'Try immer', completed: false },
  { id: 3, text: 'Profit', completed: false }
]

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)
  return (
    <Todos todos={todos} />
  )
}
export default App
