


export const todoReducer = (state, action) => {

    switch (action.type) {
        case 'ABC':
            throw new Error("Action not implemented")

        default:
            return initialState;
    }
}