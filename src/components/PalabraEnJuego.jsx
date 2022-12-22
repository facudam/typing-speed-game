import { useEffect, useState, useMemo, useContext } from "react";
import { Context } from "../contexts/Context";
import { LetraDePalabra } from "./LetraDePalabra";
import { palabrasDeNivelUno } from "../PALABRAS/nivel1";
import { getRandomWord } from "../helpers/getRandomWord";
import '../styles/PalabraEnJuego.css';


export const PalabraEnJuego = () => {

    const { juegoActivado } = useContext(Context)

    const [tipearPalabra, setTipearPalabra] = useState('')

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

   
   
   
    
   // acá tengo que guardar la información para que no se vuelva a cargar
    const letrasDePalabra = useMemo(() => getRandomWord(palabrasDeNivelUno).toUpperCase().split(''), [ juegoActivado ]) 

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
                        <div
                            key={ index } 
                            className="tipeo-container__letra"> 
                            {index} 
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}