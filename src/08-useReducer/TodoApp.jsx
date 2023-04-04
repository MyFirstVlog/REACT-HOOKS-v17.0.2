import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'

const initialState = [
    {
        id: new Date().getMilliseconds(),
        description: "Recolectas la piedra del alma",
        done: false,
    },      
    {
        id: new Date().getMilliseconds(),
        description: "Recolectas la piedra del poder",
        done: false,
    },      
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const onNewTodo  = (todo) => {
        console.log("todo in parent", {todo});
    }

  return (
    <>
        <h1>TodoApp (10), <small>pendientes: 7</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList onNewTodo={onNewTodo} todos={todos} />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />

                <TodoAdd onNewTodo={onNewTodo} />
            </div>
        </div>
    </>
  )
}
