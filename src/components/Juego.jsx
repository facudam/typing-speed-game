
import { useContext, useEffect } from 'react';
import { Context } from '../contexts/Context';
import { CuentaRegresiva } from '../Modales/CuentaRegresiva';
import '../styles/Juego.css';
import { PalabraEnJuego } from './PalabraEnJuego';
import sandCastle from '../sonidos/sandCastle.mp3'



export const Juego = () => {

    const { juegoActivado, setJuegoActivado, aparecerPalabra, setAparecerPalabra, setSegundosActivados } = useContext(Context);

    const activar = (e) => {
        if((e).key == 'Enter') { 
            setJuegoActivado(true);
            setSegundosActivados(true)
        }
        
    }

    useEffect(() => {
      
    document.addEventListener('keydown', activar)

    return () => {
        document.removeEventListener('keydown', activar)
    }

    }, [])


    
    return(
        <div className='juego-iniciado'>
            <div className='juego-iniciado__reglas__slider'>
                <div className='reglas-container'>
                    <p className='regla'>El juego consiste en tipear todas las palabras que irán apereciendo en pantalla antes de que el tiempo se agote.</p>
                    <p className='regla'>Las palabras o frases irán complicandose al avanzar de nivel.</p>
                    <p className='regla'>El tiempo para tipear también se irá reduciendo.</p>
                    <p className='regla'>Para visualizar las palabras deberás apretar la tecla 'enter'.</p>
                    <p className='regla'>Una vez presionada la tecla 'enter' comenzará la cuenta regresiva</p>
                </div>
            </div>

            <div className='en-juego'>

                

                {
                    (!juegoActivado) 
                        ? <div>
                            <p className='p-enter-press'>Presiona 'Enter' para comenzar</p>
                            <audio 
                                src={ sandCastle }
                                autoPlay
                                loop
                                
                            />
                        </div>
                        : !aparecerPalabra 
                            ? <CuentaRegresiva
                                setPalabra={ setAparecerPalabra }
                              /> 
                            : <PalabraEnJuego  />
                }

            </div>
            
        </div>
    )
} 