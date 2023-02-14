
import { useContext, useEffect } from 'react';
import { Context } from '../contexts/Context';
import { CuentaRegresiva } from '../Modales/CuentaRegresiva';
import '../styles/Juego.css';
import { PalabraEnJuego } from './PalabraEnJuego';
import sandCastle from '../sonidos/sandCastle.mp3'
import { SliderRules } from './SliderRules';
import { MusicButton } from './MusicButton';
import { TecladoTitle } from './TecladoTitle';


export const Juego = () => {

    const { juegoActivado, setJuegoActivado, aparecerPalabra, setAparecerPalabra, musicOn, setMusicOn, currentLevel, changeLevelRequirements, tiempoTerminado, juegoPerdido } = useContext(Context);

    useEffect(() => {
      
        document.addEventListener('keydown', activarJuego)

        return () => {
            document.removeEventListener('keydown', activarJuego)
        }

    }, []) 

    useEffect(() => {
        changeLevelRequirements()
        console.log('changeTimed active')
      }, [ currentLevel, tiempoTerminado, juegoPerdido ])


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

                <div className={ !aparecerPalabra ? 'en-juego__header' : `en-juego__header level-active`}>

                    {
                        aparecerPalabra && <h2 className='h2-level'>Nivel: { `${currentLevel}` }</h2>
                    }
                    
                    <MusicButton toggleMusic={ toggleMusic }/>
                 
                </div>

                
                

                {
                    (!juegoActivado) 
                        ? <div>
                                <p className='p-enter-press'>Presiona 'Enter' para comenzar</p>

                                {
                                    musicOn && <audio className='audio' src={ sandCastle } autoPlay loop />
                                }

                                <div className='fondo-empezar-juego'>
                                   <TecladoTitle />
                                </div>
                            
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