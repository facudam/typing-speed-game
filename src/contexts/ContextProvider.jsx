import { Context } from "./Context";
import { useState } from "react";

export const ContextProvider = ({children}) => {

    // +++++ Estado para iniciar juego +++++ //
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    
    // ++++++ Estados para los puntajes ++++ /
    const [ puntaje, setPuntaje ] = useState(0)
    const [ mejorPuntaje, setMejorPuntaje ] = useState(100)
    return(
        <Context.Provider value={{
            juegoIniciado,
            setJuegoIniciado,
            puntaje,
            setPuntaje,
            mejorPuntaje,
            setMejorPuntaje
            }} >{ children }</Context.Provider>
    )
}