import { useEffect, useMemo, useContext } from "react";
import { Context } from "../contexts/Context";
import { LetraDePalabra } from "./LetraDePalabra";
import { palabrasDeNivelUno } from "../PALABRAS/nivel1";
import { getRandomWord } from "../helpers/getRandomWord";
import '../styles/PalabraEnJuego.css';
import { Perdiste } from "../Modales/Perdiste";
import { Reloj } from "./Reloj";


export const PalabraEnJuego = () => {

    const { setJuegoActivado, puntaje, setPuntaje, mejorPuntaje, setMejorPuntaje, palabraTipeada, setPalabraTipeada, setAparecerPalabra, juegoPerdido, setJuegoPerdido, setSegundos, segundosActivados, setSegundosActivados } = useContext(Context)
    
    

    
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
            setPuntaje(puntaje + 10)
            setPalabraTipeada('')
            
        } else {

            setJuegoPerdido(true)
            setSegundosActivados(false)
            setTimeout(()=> {
                setPuntaje(0)
                setPalabraTipeada('')
                setJuegoActivado(false)
                setAparecerPalabra(false)
                setSegundos(10)
                setJuegoPerdido(false)
            }, 2000)
            

        }
        
    } 
    

    return(
        <>
            <Reloj />
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

            {
                juegoPerdido && <Perdiste />
            }
            
        </>
        
    )
}