import { useContext, useEffect } from "react"
import { Context } from "../contexts/Context"
import reloj from '../images/reloj.gif'
import "../styles/Reloj.css"


export const Reloj = () => {

    const { setAparecerPalabra, setPalabraTipeada, setJuegoActivado, setSegundosActivados, setPuntaje, setTiempoTerminado, setEnJuego, setAciertos, setCurrentLevel, segundos, setSegundos, levelPassed, tiempoTerminado } = useContext(Context);

    useEffect(() => {
        let intervaloDeJuego = setInterval(tiempoDeJuego, 1000);
        return () => clearInterval(intervaloDeJuego);
      }, [ segundos ]);


    const tiempoDeJuego = () => {

        if (segundos >= 1) {
            setSegundos( segundos - 1)
        
        } else {
            setEnJuego(false)
            setTiempoTerminado(true)
            setSegundosActivados(false)
            setAciertos(0)
            

            setTimeout(()=> {
                console.log('set time out')
                setCurrentLevel(1)
                setAparecerPalabra(false)
                setEnJuego(true)
                setTiempoTerminado(false)
                setPuntaje(0)
                setPalabraTipeada('')
                setJuegoActivado(false)
                setSegundos(15)
                clearInterval(intervaloDeJuego)                    
            }, 5000)
        }       
    }
    
    
    return(
        <div className="reloj-container">
            <img src={ reloj } alt='Reloj de arena'/>
            <p>{ segundos }</p>

        </div>
    )
}