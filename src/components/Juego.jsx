import { useEffect, useState } from 'react';
import '../styles/Juego.css';
import { Regla } from './Regla';

export const Juego = () => {
    const [ indice, setIndice ] = useState(0)

    useEffect(() => {
    
      
    }, [indice])
    
     
   const reglas = [
        "El juego consiste en tipear todas las palabras que irán apereciendo en pantalla antes de que el tiempo se agote.",
        "Las palabras o frases irán complicandose al avanzar de nivel.",
        "El tiempo para tipear también se irá reduciendo.", 
        "Para visualizar las palabras deberás apretar la tecla 'enter'.", 
        "¡¿Sencillo verdad?! Bueno ahora, ¡A jugar!"
    ]


    const intervalo = setInterval(() => {
        if(indice > 3) {
            setIndice(0)
        } else {
            setIndice(indice + 1)
        }
    }, 5000)


   
    

    


    return(
        <div className='juego-iniciado'>
            <div className='juego-iniciado__reglas'>
                <h1>Antes de empezar, conoce las sencillas reglas del juego:</h1>
                <div className='juego-iniciado__reglas__slider'>
                    <Regla regla={ reglas[indice] }/>
                </div>
            </div>
        </div>
    )
} 