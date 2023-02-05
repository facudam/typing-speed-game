import { useContext } from "react"
import { Context } from "../contexts/Context"
import { LetraDePalabra } from "./LetraDePalabra"


export const PalabraContainer = ( { letrasDePalabra } ) => {

    const { levelPassed } = useContext(Context)

    if (levelPassed) return;

    return(
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
    )
}