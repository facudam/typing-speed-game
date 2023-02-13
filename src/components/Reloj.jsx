import { useContext } from "react"
import { Context } from "../contexts/Context"
import reloj from '../images/reloj.gif'
import "../styles/Reloj.css"


export const Reloj = () => {

    const { setAparecerPalabra, setPalabraTipeada, setJuegoActivado, setSegundosActivados, setPuntaje, setTiempoTerminado, setEnJuego, setAciertos, setCurrentLevel, segundos, setSegundos, levelPassed, tiempoTerminado } = useContext(Context);


    const tiempoDeJuego = () => {

        if (segundos >= 1 && !levelPassed && !tiempoTerminado) {
            setSegundos( segundos - 1)
            clearInterval(intervaloDeJuego)
        
        } else {
            clearInterval(intervaloDeJuego)
            setEnJuego(false)
            setTiempoTerminado(true)
            setSegundosActivados(false)
            setAciertos(0)

            setTimeout(()=> {
                setCurrentLevel(1)
                setAparecerPalabra(false)
                setEnJuego(true)
                setTiempoTerminado(false)
                setPuntaje(0)
                setPalabraTipeada('')
                setJuegoActivado(false)        
                          
            }, 5000)
        }       
    }
    
    
    let intervaloDeJuego = setInterval(tiempoDeJuego, 1000)
    
    return(
        <div className="reloj-container">
            <img src={ reloj } alt='Reloj de arena'/>
            <p>{ segundos }</p>

        </div>
    )
}