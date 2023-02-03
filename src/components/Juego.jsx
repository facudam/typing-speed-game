
import { useContext, useEffect } from 'react';
import { Context } from '../contexts/Context';
import { CuentaRegresiva } from '../Modales/CuentaRegresiva';
import '../styles/Juego.css';
import { PalabraEnJuego } from './PalabraEnJuego';
import sandCastle from '../sonidos/sandCastle.mp3'
import musicImage from '../images/music.svg'
import { NivelSuperado } from '../Modales/NivelSuperado';


export const Juego = () => {

    const { juegoActivado, setJuegoActivado, aparecerPalabra, setAparecerPalabra, setSegundosActivados, musicOn, setMusicOn } = useContext(Context);

    const toggleMusic = () => {
        if (musicOn === true ) { setMusicOn(false) }
        else { setMusicOn(true) }
    }

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
             {/*Crear un componente para ésto:*/}
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

                <div className='muted-btn-container'>
                    <img src={ musicImage } alt='Music logo' />
                    <input type='checkbox' id='muted-btn'
                        onInput={() => toggleMusic()}
                     />
                    <label htmlFor='muted-btn' className='muted-switch'></label>
                </div>

                {
                    (!juegoActivado) 
                        ? <div>
                            <p className='p-enter-press'>Presiona 'Enter' para comenzar</p>

                            {
                                musicOn && <audio className='audio' src={ sandCastle } autoPlay loop />
                            }
                            
                        </div>
                        : !aparecerPalabra 
                            ? <CuentaRegresiva
                                setPalabra={ setAparecerPalabra }
                              /> 
                            : <PalabraEnJuego  />
                }

                <NivelSuperado />

            </div>
            
        </div>
    )
} 