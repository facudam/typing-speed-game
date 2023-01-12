import { Context } from "./Context";
import { useState } from "react";

export const ContextProvider = ({children}) => {

    // +++++ Estados para iniciar juego +++++ //
    const [ juegoIniciado, setJuegoIniciado ] = useState(false); 
    const [ juegoActivado, setJuegoActivado ] = useState(false);
    const [ aparecerPalabra, setAparecerPalabra ] = useState(false)
    
    // ++++++ Estados para los puntajes ++++ /
    const [ puntaje, setPuntaje ] = useState(0)
    const [ mejorPuntaje, setMejorPuntaje ] = useState(
        localStorage.getItem('mejorPuntaje') ?? 0
    )

    const [ palabraTipeada, setPalabraTipeada ] = useState('');
    const [ juegoPerdido, setJuegoPerdido ] = useState(false)

    // ++++ Estados para el tiempo de juego y para niveles ++++ //
    const [ segundos, setSegundos ] = useState(6)
    const [ nivel, setNivel ] = useState(1)


    


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
            setAparecerPalabra,
            palabraTipeada,
            setPalabraTipeada,
            juegoPerdido,
            setJuegoPerdido,
            segundos,
            setSegundos
            }} >{ children }</Context.Provider>
    )
}