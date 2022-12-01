import { Context } from "./Context";
import { useState } from "react";

export const ContextProvider = ({children}) => {

    
    // ++++++ Estados para los puntajes ++++ /
    const [ puntaje, setPuntaje ] = useState(0)
    const [ mejorPuntaje, setMejorPuntaje ] = useState(100)
    return(
        <Context.Provider value={{
            puntaje,
            mejorPuntaje
            }} >{ children }</Context.Provider>
    )
}