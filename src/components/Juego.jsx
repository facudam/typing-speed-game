
import { useContext, useEffect } from 'react';
import { Context } from '../contexts/Context';
import { CuentaRegresiva } from '../Modales/CuentaRegresiva';
import '../styles/Juego.css';
import { PalabraEnJuego } from './PalabraEnJuego';
import sandCastle from '../sonidos/sandCastle.mp3'
import { SliderRules } from './SliderRules';
import { MusicButton } from './MusicButton';


export const Juego = () => {

    const { juegoActivado, setJuegoActivado, aparecerPalabra, setAparecerPalabra, musicOn, setMusicOn, currentLevel, aciertosRequeridos } = useContext(Context);

    useEffect(() => {
      
        document.addEventListener('keydown', activarJuego)

        return () => {
            document.removeEventListener('keydown', activarJuego)
        }

    }, [])  


    const toggleMusic = () => {
        musicOn 
            ? setMusicOn(false) 
            : setMusicOn(true) 
    }

    const activarJuego = (e) => {
        ((e).key == 'Enter') && setJuegoActivado(true)       
    }



    
    return(
        
        <div className='juego-iniciado'>

            <SliderRules />

            <div className='en-juego'>

                <MusicButton toggleMusic={ toggleMusic }/>
                {
                    aparecerPalabra && <h2>Nivel: { `${currentLevel}, aciertos requeridos: ${aciertosRequeridos}` }</h2>
                }
                

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