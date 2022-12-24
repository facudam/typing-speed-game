import { useEffect, useState, useMemo, useContext } from "react";
import { Context } from "../contexts/Context";
import { LetraDePalabra } from "./LetraDePalabra";
import { palabrasDeNivelUno } from "../PALABRAS/nivel1";
import { getRandomWord } from "../helpers/getRandomWord";
import '../styles/PalabraEnJuego.css';


export const PalabraEnJuego = () => {

    const { juegoActivado } = useContext(Context)

    const [ palabraTipeada, setPalabraTipeada ] = useState('')

    const handleKeydown = (e) => {
        
        const letraApretada = e.key;
        setPalabraTipeada(prevPalabra => prevPalabra + letraApretada)
        
    }

    console.log(palabraTipeada)

   useEffect(() => {
     window.addEventListener('keydown', handleKeydown)

     return () => {
        window.removeEventListener('keydown', handleKeydown)
     }
     
   }, [])

    
   // Guardamos la palabra retornada para evitar que se vuelva a cargar tras un cambio de estado en la app.
    const letrasDePalabra = useMemo(() => getRandomWord(palabrasDeNivelUno).toUpperCase().split(''), [ juegoActivado ]) 

    return(
        <div>
            <div className="palabra-container">
                {
                    letrasDePalabra.map(letra => (
                        <LetraDePalabra 
                            letra={ letra }
                            key={ Math.random() * 1000000 }
                        />
                    ))
                }
            </div>
            <div className="tipeo-container">
                {
                    letrasDePalabra.map((letra, index) => (
                        <div
                            key={ index } 
                            className="tipeo-container__letra"> 
                            {index} 
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}