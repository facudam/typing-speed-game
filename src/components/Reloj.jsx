import { useContext, useState } from "react"
import { Context } from "../contexts/Context"
import reloj from '../images/reloj.png'
import "../styles/Reloj.css"


export const Reloj = () => {

    const { segundos, setSegundos, setAparecerPalabra, setPalabraTipeada, setJuegoActivado, setJuegoPerdido, setPalabra } = useContext(Context);

    const tiempoDeJuego = () => {

        if (segundos > 1) {
            setSegundos( segundos - 1)
            clearInterval(intervaloDeJuego)
        
        } else {
            setJuegoPerdido(true)
            setTimeout(()=> {
                setJuegoActivado(false)
                setAparecerPalabra(false)
                setPalabra(false)
                setPuntaje(0)
                setPalabraTipeada('')
                setJuegoPerdido(false)
                setSegundos(6)
                
            }, 2000)
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