import { useEffect, useMemo, useContext } from "react";
import { Context } from "../contexts/Context";
import { LetraDePalabra } from "./LetraDePalabra";
import { palabrasDeNivel1 } from "../PALABRAS/nivel1";
import { palabrasDeNivel2 } from "../PALABRAS/nivel2";
import { getRandomWord } from "../helpers/getRandomWord";
import '../styles/PalabraEnJuego.css';
import { Reloj } from "./Reloj";
import { LostGame } from "./LostGame";
import { TimeOver } from "./TimeOver";
import ticktock from "../sonidos/ticktock.mp3"



export const PalabraEnJuego = () => {

    const { setJuegoActivado, puntaje, setPuntaje, mejorPuntaje, setMejorPuntaje, palabraTipeada, setPalabraTipeada, setAparecerPalabra, juegoPerdido, setJuegoPerdido, setSegundos, setSegundosActivados, tiempoTerminado, enJuego, setEnJuego, musicOn } = useContext(Context)
    
    

    
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
   
   const palabraRandom = useMemo(() => getRandomWord(palabrasDeNivel1), [ puntaje ]);
   const letrasDePalabra = palabraRandom.toUpperCase().split('')

    
    if(palabraRandom.length === palabraTipeada.length) {
        if(palabraRandom === palabraTipeada) {
            setPuntaje(puntaje + 10)
            setPalabraTipeada('')
            
        } else {
            setEnJuego(false)
            setJuegoPerdido(true)
            setSegundosActivados(false)
            
            setTimeout(()=> {
                setEnJuego(true)
                setPuntaje(0)
                setPalabraTipeada('')
                setJuegoActivado(false)
                setAparecerPalabra(false)
                setSegundos(9)
                setJuegoPerdido(false)
                
            }, 5000)
    

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
                juegoPerdido && <LostGame />
            }

            {
                tiempoTerminado && <TimeOver />
            }

            {
                (enJuego && musicOn ) &&  <audio src={ ticktock } autoPlay loop />
            
            }


            
            
        </>
        
    )
}