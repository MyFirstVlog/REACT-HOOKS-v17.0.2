
const ACTIONS = {
    ADD_TODO : "[TODO] add todo"
}


const initialState = [
    {
        id: 1,
        todo: "Recolectas la piedra del alma",
        done: false,
    }
];


const todoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, {...action.payload}];
    
        default:
            return state;
    }
} 

const todosInit = todoReducer();

const newTodo = {
    id: 2,
    todo: "Recolectar la piedra del poder",
    done: false,
}

const addTodoAction = {
    type: "[TODO] add todo",
    payload: newTodo,
}


const todos = todoReducer(todosInit, addTodoAction)

console.log("el nuevo todos despues de add", todos);