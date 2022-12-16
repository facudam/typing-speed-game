import { Context } from "./Context";
import { useState } from "react";

export const ContextProvider = ({children}) => {

    // +++++ Estados para iniciar juego +++++ //
    const [juegoIniciado, setJuegoIniciado] = useState(false); 
    const [juegoActivado, setJuegoActivado] = useState(false);
    const [aparecerPalabra, setAparecerPalabra] = useState(false)
    
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
            setMejorPuntaje,
            juegoActivado,
            setJuegoActivado,
            aparecerPalabra, 
            setAparecerPalabra
            }} >{ children }</Context.Provider>
    )
}