import { useEffect, useMemo, useContext } from "react";
import { Context } from "../contexts/Context";
import { palabrasDeNivel1 } from "../PALABRAS/nivel1";
import { palabrasDeNivel2 } from "../PALABRAS/nivel2";
import { getRandomWord } from "../helpers/getRandomWord";
import '../styles/PalabraEnJuego.css';
import { Reloj } from "./Reloj";
import { LostGame } from "./LostGame";
import { TimeOver } from "./TimeOver";
import ticktock from "../sonidos/ticktock.mp3"
import { PalabraContainer } from "./PalabraContainer";
import { TipeoContainer } from "./TipeoContainer";


export const PalabraEnJuego = () => {

    const { setJuegoActivado, puntaje, setPuntaje, mejorPuntaje, setMejorPuntaje, palabraTipeada, setPalabraTipeada, setAparecerPalabra, juegoPerdido, setJuegoPerdido, setSegundos, segundosActivados, setSegundosActivados, tiempoTerminado, enJuego, setEnJuego, musicOn, levelStage, acierto, setAcierto } = useContext(Context)
    
    
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

    
   // Si el levelStage es menor 0 igual a 3, inicializamos las palabras de nivel 1. Sino, accedemos a las palabras de nivel 2. 
   // Una vez ya accedida la lista de palabras, guardamos la palabra retornada para evitar que se vuelva a cargar tras un cambio de estado en la app.

   let palabraRandom;

   (levelStage <= 3) 
        ? palabraRandom = useMemo(() => getRandomWord(palabrasDeNivel1), [ puntaje ]) 
        : palabraRandom = useMemo(() => getRandomWord(palabrasDeNivel2), [ puntaje ]);

   const letrasDePalabra = palabraRandom.toUpperCase().split('')

    const compararPalabras = () => {
        if(palabraTipeada.length >= palabraRandom.length) {
            if(palabraRandom.toUpperCase() === palabraTipeada.toUpperCase()) {
                setPuntaje(puntaje + 10)
                setPalabraTipeada('')
            
            } else {
                setEnJuego(false)
                setJuegoPerdido(true)
                setSegundosActivados(false)
                
                setTimeout(()=> {
                    setSegundos(9)
                    setJuegoActivado(false)
                    setEnJuego(true)
                    setPuntaje(0)
                    setPalabraTipeada('')
                    setAparecerPalabra(false)
                    setJuegoPerdido(false)  
            }, 5000)

            }  
        }
    }


    (!tiempoTerminado && !juegoPerdido) && compararPalabras() 
    

    return(
        <>

            { 
                segundosActivados && <Reloj /> 
            }

            <PalabraContainer letrasDePalabra={ letrasDePalabra } />
            
            <TipeoContainer palabraTipeada={ palabraTipeada } letrasDePalabra={ letrasDePalabra } />

            {
                juegoPerdido && <LostGame />
            }

            {
                (tiempoTerminado && !juegoPerdido) && <TimeOver />
            }

            {
                ( enJuego && musicOn ) &&  <audio src={ ticktock } autoPlay loop />
            
            } 
            
        </>
        
    )
}