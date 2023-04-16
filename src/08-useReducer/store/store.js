import { createStore } from "redux";

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

export const store = createStore(() => ({
    todos: initialState,
  }));