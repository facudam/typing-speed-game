import { LetraDePalabra } from "./LetraDePalabra"


export const PalabraContainer = ( { letrasDePalabra } ) => {
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