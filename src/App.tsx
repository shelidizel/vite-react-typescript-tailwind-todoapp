import * as React from 'react'
import { render } from 'react-dom'

import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'

import { TodoInterface } from './types.d'

import './styles/styles.css'

const App = () => {
  const [todos, settodos] = React.useState<TodoInterface[]>([])

  function handleTodoCreate(todo : TodoInterface) {
    const newTodoState : TodoInterface[] = [...todos]

    newTodoState.push(todo)

    settodos(newTodoState)
  }

  function handleTodoUpdate(event : React.ChangeEvent<HTMLInputElement>, id : String) {
    const newTodoState : TodoInterface[] = [...todos]

    newTodoState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value

    settodos(newTodoState)
  }

  function handleTodoRemove(id : string) {
    const newTodoState : TodoInterface[] = todos.filter((todo : TodoInterface) => todo.id !== id)
    settodos(newTodoState)
  }

  function handleTodoComplete(id : string) {
    const newTodoState : TodoInterface[] = [...todos]

    newTodoState.find((todo : TodoInterface) => todo.id === id)!.isCompleted = 
    !newTodoState.find((todo : TodoInterface) => todo.id === id)!.isCompleted

    settodos(newTodoState)
  }

  function handleTodoBlur(event : React.ChangeEvent<HTMLInputElement>) {
    if(event.target.value.length === 0) {
      event.target.classList.add('todo-input-error')
    } else {
      event.target.classList.remove('todo-input-error')
    }
  }

  return (
    <div className='todo-list-app'>
      <TodoForm
      todos={todos}
      handleTodoCreate={handleTodoCreate}/>

      <TodoList
      todos={todos}
      handleTodoBlur={handleTodoBlur}
      handleTodoComplete={handleTodoComplete}
      handleTodoRemove={handleTodoRemove}
      handleTodoUpdate={handleTodoUpdate}/>
    </div>
  )
}

const rootElemet = document.getElementById('root')
render(<App/>, rootElemet)

export default App
