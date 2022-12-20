import { useEffect } from "react";
import { LetraDePalabra } from "./LetraDePalabra";
import { palabrasDeNivelUno } from "../PALABRAS/nivel1";
import { getRandomWord } from "../helpers/getRandomWord";
import '../styles/PalabraEnJuego.css';

export const PalabraEnJuego = () => {

   useEffect(() => {
     console.log('hola')
   
     
   }, [])
   
   
    

    const letrasDePalabra = getRandomWord(palabrasDeNivelUno).toUpperCase().split('');

    return(
        <div>
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
                    letrasDePalabra.map(letra => (
                        <input
                            key={ Math.random() * 1000000567674 } 
                            className="tipeo-container__letra" 
                            type='text' 
                            value={''}
                        />
                    ))
                }
            </div>
        </div>
        
    )
}