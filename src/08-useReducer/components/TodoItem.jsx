

import React from 'react'

export const TodoItem = ({todo, handleDeleteTodo, onToggleTodo}) => {
  return (
    <li key={todo.id} className={`list-group-item d-flex justify-content-between ${todo.done && 'text-decoration-line-through'}`}>
        <span onClick={() => onToggleTodo(todo.id)} className='align-self-center'>{todo.description}</span>
        <button onClick={() => handleDeleteTodo(todo.id)} className='btn btn-danger'>Borrar</button>
    </li>
  )
}
