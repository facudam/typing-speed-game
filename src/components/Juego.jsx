
import '../styles/Juego.css';
import { PalabraEnJuego } from './PalabraEnJuego';


export const Juego = () => {

    let hola = false;
    
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
                    !hola 
                        ? <p className='p-enter-press'>Presiona 'Enter' para comenzar</p>
                        : <PalabraEnJuego />
                }
            </div>
        </div>
    )
} 