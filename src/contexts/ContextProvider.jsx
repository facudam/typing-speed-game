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
    const [ segundosActivados, setSegundosActivados ] = useState(false)
    const [ segundos, setSegundos ] = useState(9)
    
    const [ currentLevel, setCurrentLevel ] = useState(1)
    const [ levelStage, setLevelStage ] = useState(1)

    // +++++++ Estado para los aciertos ++++++ //
    const [ acierto, setAcierto ] = useState(0)

    const [ tiempoTerminado, setTiempoTerminado ] = useState(false)
    const [ enJuego, setEnJuego ] = useState(true)

    const [ musicOn, setMusicOn ] = useState(true)


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
            setSegundos,
            segundosActivados,
            setSegundosActivados,
            currentLevel,
            setCurrentLevel,
            tiempoTerminado,
            setTiempoTerminado,
            enJuego,
            setEnJuego,
            musicOn,
            setMusicOn,
            levelStage,
            setLevelStage,
            acierto, 
            setAcierto
            }} >{ children }</Context.Provider>
    )
}