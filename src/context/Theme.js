import React, { createContext, useState, useReducer } from "react";
import reducer from "./theme-reducer";
export const ThemeContext = React.createContext()

const initialState = {
    theme : ''
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // const {theme, setTheme} = useState('')

    const changeTheme = ()=> {
        dispatch({type: 'CHANGE_THEME'})    
    }

    return <ThemeContext.Provider value={{}}>
        {children}
    </ThemeContext.Provider>
}