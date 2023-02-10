import { useContext } from "react"
import { Context } from "../contexts/Context"
import reloj from '../images/reloj.gif'
import "../styles/Reloj.css"


export const Reloj = () => {

    const { setAparecerPalabra, setPalabraTipeada, setJuegoActivado, setSegundosActivados, setPuntaje, setTiempoTerminado, setEnJuego, setAciertos, setCurrentLevel, segundos, setSegundos } = useContext(Context);


    const tiempoDeJuego = () => {

        if (segundos > 1) {
            setSegundos( segundos - 1)
            clearInterval(intervaloDeJuego)
        
        } else {
            setEnJuego(false)
            setTiempoTerminado(true)
            setSegundosActivados(false)
            clearInterval(intervaloDeJuego)
            setAciertos(0)

            setTimeout(()=> {
                setCurrentLevel(1)
                setAparecerPalabra(false)
                setEnJuego(true)
                setTiempoTerminado(false)
                setPuntaje(0)
                setPalabraTipeada('')
                setJuegoActivado(false)
                setJuegoPerdido(false)         
                          
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