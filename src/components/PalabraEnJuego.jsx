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
import { YouWin } from "./YouWin";


export const PalabraEnJuego = () => {

    const { setJuegoActivado, puntaje, setPuntaje, mejorPuntaje, setMejorPuntaje, palabraTipeada, setPalabraTipeada, setAparecerPalabra, juegoPerdido, setJuegoPerdido, segundosActivados, setSegundosActivados, tiempoTerminado, enJuego, setEnJuego, musicOn, currentLevel, setCurrentLevel, aciertos, setAciertos, levelPassed, verificarAciertos,changeLevelRequirements } = useContext(Context)
    
    
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

   }, [ puntaje ])

  
  useEffect(() => {
    changeLevelRequirements()
    console.log('changeTimed active')
  }, [ currentLevel ])
    
 

    const handleKeydown = (e) => {     
        const letraApretada = e.key;
        setPalabraTipeada(prevPalabra => prevPalabra + letraApretada)      
      }

    
   // Si el currentLevel es menor 0 igual a 3, inicializamos las palabras de nivel 1. Sino, accedemos a las palabras de nivel 2. 
   // Una vez ya accedida la lista de palabras, guardamos la palabra retornada para evitar que se vuelva a cargar tras un cambio de estado en la app.

   let palabraRandom;

   (currentLevel <= 4) 
        ? palabraRandom = useMemo(() => getRandomWord(palabrasDeNivel1), [ puntaje, currentLevel]) 
        : palabraRandom = useMemo(() => getRandomWord(palabrasDeNivel2), [ puntaje, currentLevel ]);

   const letrasDePalabra = palabraRandom.toUpperCase().split('')

   

    const compararPalabras = () => {
        if(palabraTipeada.length >= palabraRandom.length) {
            if(palabraRandom.toUpperCase() === palabraTipeada.toUpperCase()) {
                setPuntaje(puntaje + 10)
                setPalabraTipeada('')
                setAciertos(aciertos + 1)
                
                verificarAciertos()
            
            } else {
                setEnJuego(false)
                setJuegoPerdido(true)
                setSegundosActivados(false)
                
                setTimeout(()=> {
                    setCurrentLevel(1)
                    setJuegoActivado(false)
                    setEnJuego(true)
                    setPuntaje(0)
                    setPalabraTipeada('')
                    setAparecerPalabra(false)
                    setJuegoPerdido(false)
                    setAciertos(0) 
                    
            }, 5000)

            }  
        }
    }

    
    (!tiempoTerminado && !juegoPerdido && !levelPassed) && compararPalabras()
    

    
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
                (tiempoTerminado && !juegoPerdido && !levelPassed) && <TimeOver />
            }

            {
                ( enJuego && musicOn ) &&  <audio src={ ticktock } autoPlay loop />       
            }

            {
                levelPassed && <YouWin />
            }

            
        </>
        
    )
}