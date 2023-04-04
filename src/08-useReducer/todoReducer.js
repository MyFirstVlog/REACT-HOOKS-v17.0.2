


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

        default:
            return initialState;
    }
}