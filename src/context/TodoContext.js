import { createContext, useContext, useReducer } from "react";
import { InitailState,reducers } from "./reducer";

const TodoContext = createContext();

export const TodoProvider = ({children})=> {
    const [state,dispatch] = useReducer(reducers, InitailState);
    return (
        <TodoContext.Provider value={{state,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = ()=> useContext(TodoContext)