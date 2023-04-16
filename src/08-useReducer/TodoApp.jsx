import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'
import { useDispatch, useSelector } from 'react-redux'

export const TodoApp = () => {
    // const [todos, dispatch] = useReducer(todoReducer, initialState, init); //init use for loading big amount of data

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoReducer);

    console.log(todos);

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
        <h1>TodoApp ({todos.filter(todo => !todo.done).length}), <small>pendientes: {todos.filter(todo => todo.done).length}</small></h1>
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
