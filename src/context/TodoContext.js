import React, { createContext, useReducer } from 'react'
import { todoReducer } from '../reducers/todoReducer'

export const TodoContext = createContext()

const ToDoContextProvider = (props) => {
    const [todos, dispatch] = useReducer(todoReducer, [])
    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    )
}
export default ToDoContextProvider