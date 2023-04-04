import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onResetChange} = useForm({
        description: ''
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        };

        onNewTodo(newTodo);
        onResetChange();
    }


  return (
    <form onSubmit={onHandleSubmit}>
        <input 
            type='text'
            placeholder='What TODO?'
            className='form-control'
            name="description"
            value={description}
            onChange={onInputChange}
        />

        <button
            type='submit'
            className='btn btn-outline-primary mt-1'
        >
            Add
        </button>
    </form>
  )
}
