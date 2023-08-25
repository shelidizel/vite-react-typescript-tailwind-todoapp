import * as React from 'react'

import TodoItem from './todo-item'

import { TodoListInterface } from '../types.d'

const TodoList = (props : TodoListInterface) => {
    return (
        <div className='todo-list'>
            <ul>
                {props.todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem
                        todo = {todo}
                        handleTodoBlur={props.handleTodoBlur}
                        handleTodoComplete={props.handleTodoComplete}
                        handleTodoRemove={props.handleTodoRemove}
                        handleTodoUpdate={props.handleTodoUpdate}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList