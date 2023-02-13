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
    const [ segundos, setSegundos ] = useState()
    
    const [ currentLevel, setCurrentLevel ] = useState(1)
    const [ levelStage, setLevelStage ] = useState(1)

    // +++++++ Estado para los aciertos ++++++ //
    const [ aciertos, setAciertos ] = useState(0)
    const [ aciertosRequeridos, setAciertosRequeridos ] = useState(1)

    const [ tiempoTerminado, setTiempoTerminado ] = useState(false)
    const [ enJuego, setEnJuego ] = useState(true) // Para activar el audio ticktock

    const [ musicOn, setMusicOn ] = useState(true)
    const [ levelPassed, setLevelPassed ] = useState(false)

    const [ teclaPresionada, setTeclaPresionada ] = useState(false)

    

    const changeLevelRequirements = () => {
        switch (currentLevel) {
            case 1:
                setSegundos(15)
                setAciertosRequeridos(1)
                break;
            case 2:
                setSegundos(15)
                setAciertosRequeridos(2)
                break;
            case 3:
                setSegundos(12)
                setAciertosRequeridos(2)
                break;
            case 4:
                setSegundos(10)
                setAciertosRequeridos(3)
                break;
            case 5:
                setSegundos(10)
                setAciertosRequeridos(2)
                break;
            case 6:
                setSegundos(9)
                setAciertosRequeridos(3)
                break;
            case 7:
                setSegundos(8)
                setAciertosRequeridos(3)
            default:
                setSegundos(100)
                setAciertosRequeridos(100)
                break;
        }

    }


    const verificarAciertos = () => {
        if (aciertosRequeridos === aciertos) {
            setLevelPassed(true)
            setEnJuego(false)
            setSegundosActivados(false)
            
            
                setTimeout(()=> {
                    setCurrentLevel( currentLevel + 1) 
                    setPalabraTipeada('')
                    setLevelPassed(false)
                    setLevelPassed(false)
                    setAciertos(0)
                    setSegundosActivados(true)
                    setEnJuego(true)
                    setJuegoActivado(true)
                    
            }, 5000)
        }
 }

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
            aciertos, 
            setAciertos,
            levelPassed,
            setLevelPassed,
            aciertosRequeridos,
            setAciertosRequeridos,
            verificarAciertos,
            changeLevelRequirements,
            teclaPresionada,
            setTeclaPresionada
            }} >{ children }</Context.Provider>
    )
}