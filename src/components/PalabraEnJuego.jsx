import { useEffect, useState } from "react";
import { LetraDePalabra } from "./LetraDePalabra";
import { palabrasDeNivelUno } from "../PALABRAS/nivel1";
import { getRandomWord } from "../helpers/getRandomWord";
import '../styles/PalabraEnJuego.css';

export const PalabraEnJuego = () => {

    const [tipearPalabra, setTipearPalabra] = useState([])

    const handleKeydown = (e) => {
        setTipearPalabra(e.key)
        console.log(tipearPalabra)
    }

   useEffect(() => {
     window.addEventListener('keydown', handleKeydown)

     return () => {
        window.removeEventListener('keydown', handleKeydown)
     }
     
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
                    letrasDePalabra.map((letra, index) => (
                        <input
                            key={ index } 
                            className="tipeo-container__letra" 
                            type='text' 
                            defaultValue={index}
                        />
                    ))
                }
            </div>
        </div>
        
    )
}