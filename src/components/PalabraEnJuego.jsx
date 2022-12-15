import { LetraDePalabra } from "./LetraDePalabra";
import { palabrasDeNivelUno } from "../PALABRAS/nivel1";
import { getRandomWord } from "../helpers/getRandomWord";

export const PalabraEnJuego = () => {

    
    const letrasDePalabra = getRandomWord(palabrasDeNivelUno).toUpperCase().split('');


    return(
        <div className="palabra-container">
            {
                letrasDePalabra.map(letra => (
                    <LetraDePalabra letra={ letra }/>
                ))
            }
        </div>
    )
}