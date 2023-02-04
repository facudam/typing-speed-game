
import { useContext, useEffect } from 'react';
import { Context } from '../contexts/Context';
import { CuentaRegresiva } from '../Modales/CuentaRegresiva';
import '../styles/Juego.css';
import { PalabraEnJuego } from './PalabraEnJuego';
import sandCastle from '../sonidos/sandCastle.mp3'
import { SliderRules } from './SliderRules';
import { MusicButton } from './MusicButton';


export const Juego = () => {

    const { juegoActivado, setJuegoActivado, aparecerPalabra, setAparecerPalabra, setSegundosActivados, musicOn, setMusicOn } = useContext(Context);

    const toggleMusic = () => {
        musicOn 
            ? setMusicOn(false) 
            : setMusicOn(true) 
    }

    const activar = (e) => {
        ((e).key == 'Enter') && setJuegoActivado(true)       
    }

    useEffect(() => {
      
    document.addEventListener('keydown', activar)

    return () => {
        document.removeEventListener('keydown', activar)
    }

    }, [])

    
    return(
        
        <div className='juego-iniciado'>

            <SliderRules />

            <div className='en-juego'>

                <MusicButton toggleMusic={ toggleMusic }/>

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

            </div>

        </div>
    )
} 