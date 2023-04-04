import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, handleDeleteTodo, onToggleTodo}) => {
  return (
    <ul className='list-group'>
        {
            todos.map(todo =>(
                <TodoItem key={Math.random() * todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} onToggleTodo={onToggleTodo}/>
            ))
        }
    </ul>
  )
}
