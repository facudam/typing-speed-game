import '../styles/Juego.css';

export const Juego = () => {
    return(
        <div className='juego-iniciado'>
            <div className='juego-iniciado__reglas'>
                <h1>Antes de empezar, conoce las sencillas reglas del juego:</h1>
                <div className='juego-iniciado__reglas__slider'>
                    <p>El juego consiste en tipear todas las palabras que irán apereciendo en pantalla antes de que el tiempo se agote.</p>
                    <p>Las palabras o frases irán complicandose al avanzar de nivel.</p>
                    <p>El tiempo para tipear también se irá reduciendo.</p>
                    <p>Para visualizar las palabras deberás apretar la tecla 'enter'.</p>
                    <p>¡¿Sencillo verdad?! Bueno ahora, ¡A jugar!</p>
                </div>
            </div>
        </div>
    )
} 