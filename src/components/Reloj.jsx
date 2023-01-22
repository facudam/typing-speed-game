import { useContext, useState } from "react"
import { Context } from "../contexts/Context"
import reloj from '../images/reloj.gif'
import "../styles/Reloj.css"


export const Reloj = () => {

    const { segundos, setSegundos, setAparecerPalabra, setPalabraTipeada, setJuegoActivado, segundosActivados, setSegundosActivados, setPuntaje, setTiempoTerminado, setEnJuego } = useContext(Context);

    if(!segundosActivados) return;

    const tiempoDeJuego = () => {

        if (segundos > 1) {
            setSegundos( segundos - 1)
            clearInterval(intervaloDeJuego)
        
        } else {
            setEnJuego(false)
            setTiempoTerminado(true)
            setSegundosActivados(false)
            clearInterval(intervaloDeJuego)
            setTimeout(()=> {
                setEnJuego(true)
                setTiempoTerminado(false)
                setPuntaje(0)
                setPalabraTipeada('')
                setJuegoActivado(false)
                setAparecerPalabra(false)
                setSegundos(9)
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