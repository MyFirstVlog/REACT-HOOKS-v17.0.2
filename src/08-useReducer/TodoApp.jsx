import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'

const initialState = [
    // {
    //     id: new Date().getMilliseconds(),
    //     description: "Recolectas la piedra del alma",
    //     done: false,
    // },      
    // {
    //     id: new Date().getMilliseconds(),
    //     description: "Recolectas la piedra del poder",
    //     done: false,
    // },      
]

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init); //init use for loading big amount of data

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const onNewTodo  = (todo) => {
        const action = {
            type: 'Add todo',
            payload: todo
        };
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Remove todo',
            payload: id,
        })
    }

    const handleToggleTodo = (id) => {
        console.log({id});
        dispatch({
            type: 'Toggle todo',
            payload: id,
        })
    }

  return (
    <>
        <h1>TodoApp (10), <small>pendientes: 7</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
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
