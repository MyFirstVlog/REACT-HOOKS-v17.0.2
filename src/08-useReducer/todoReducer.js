


export const todoReducer = (state, action) => {

    switch (action.type) {
        case 'Add todo':
            // throw new Error("Action not implemented")
            return [...state, {
                ...action.payload
            }]

        default:
            return initialState;
    }
}