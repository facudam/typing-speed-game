import { useEffect, useMemo, useContext } from "react";
import { Context } from "../contexts/Context";
import { LetraDePalabra } from "./LetraDePalabra";
import { palabrasDeNivelUno } from "../PALABRAS/nivel1";
import { getRandomWord } from "../helpers/getRandomWord";
import '../styles/PalabraEnJuego.css';
import { Perdiste } from "../Modales/Perdiste";


export const PalabraEnJuego = () => {

    const { juegoActivado, setJuegoActivado, puntaje, setPuntaje, mejorPuntaje, setMejorPuntaje, palabraTipeada, setPalabraTipeada, setAparecerPalabra } = useContext(Context)
    
    

    
   useEffect(() => {
     window.addEventListener('keydown', handleKeydown)

     return () => {
        window.removeEventListener('keydown', handleKeydown)
     }
     
   }, [])

   useEffect(() => {
        if(puntaje > mejorPuntaje) {
            setMejorPuntaje(puntaje)
            localStorage.setItem('mejorPuntaje', puntaje ?? 0)
        }
   }, [puntaje])

    const handleKeydown = (e) => {     
        const letraApretada = e.key;
        setPalabraTipeada(prevPalabra => prevPalabra + letraApretada)      
      }

    
   // Guardamos la palabra retornada para evitar que se vuelva a cargar tras un cambio de estado en la app.
   const palabraRandom = useMemo(() => getRandomWord(palabrasDeNivelUno), [ puntaje ]);
   const letrasDePalabra = palabraRandom.toUpperCase().split('')
    

    if(palabraRandom.length === palabraTipeada.length) {
        if(palabraRandom === palabraTipeada) {
            console.log('son iguales')
            setPuntaje(puntaje + 10)
            setPalabraTipeada('')
            
        } else {
            setPuntaje(0)
            setPalabraTipeada('')
            setJuegoActivado(false)
            setAparecerPalabra(false)
        }
        
    } 
    

    return(
        <>
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
                            { palabraTipeada.charAt(index).toUpperCase() } 
                        </div>
                    ))
                }
            </div>
            <Perdiste />
        </>
        
    )
}