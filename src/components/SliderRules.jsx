import '../styles/Juego.css';

export const SliderRules = () => {
    return(
        <div className='juego-iniciado__reglas__slider'>
            <div className='reglas-container'>
                <p className='regla'>El juego consiste en tipear todas las palabras que irán apereciendo en pantalla antes de que el tiempo se agote.</p>
                <p className='regla'>La cantidad de palabras a tipear irá aumentando al avanzar de nivel.</p>
                <p className='regla'>El tiempo de juego también se irá reduciendo.</p>
                <p className='regla'>Al superar el nivel 4, las palabras aumentarán su dificultad</p>
                <p className='regla'>Todas las palabras utilizadas en este juego son pertenecientes a nuestro idioma español.</p>
            </div>
        </div>
    )
}