


export const todoReducer = (state = [], action) => {

    console.log({state, action})

    switch (action.type) {
        case 'Add todo':
            // throw new Error("Action not implemented")
            return [...state, {
                ...action.payload
            }];
        
        case 'Remove todo':
            return state.filter(eachState => eachState.id !== action.payload);

        case 'Toggle todo':
            return state.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })

        default:
            return initialState;
    }
}