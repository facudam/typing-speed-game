import { useContext, useState } from "react"
import { Context } from "../contexts/Context"
import reloj from '../images/reloj.gif'
import "../styles/Reloj.css"


export const Reloj = () => {

    const { segundos, setSegundos, setAparecerPalabra, setPalabraTipeada, setJuegoActivado, setJuegoPerdido, setPalabra, segundosActivados, setSegundosActivados, setPuntaje } = useContext(Context);

    if(!segundosActivados) return;

    const tiempoDeJuego = () => {

        if (segundos > 1) {
            setSegundos( segundos - 1)
            clearInterval(intervaloDeJuego)
        
        } else {
            
            setTimeout(()=> {
                clearInterval(intervaloDeJuego)
                setPuntaje(0)            
                setSegundos(6)
                setPalabraTipeada('')              
                setSegundosActivados(false)
                setAparecerPalabra(false)               
                setJuegoActivado(false)
                setPalabra(false)             
                    
            }, 1000)
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