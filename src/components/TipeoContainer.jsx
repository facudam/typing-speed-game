import { useContext } from "react"
import { Context } from "../contexts/Context"


export const TipeoContainer = ({ palabraTipeada, letrasDePalabra }) => {

    const { tiempoTerminado, juegoPerdido, levelPassed } = useContext(Context)


  return (
    <div className="tipeo-container">
        {   //En caso de perder, que se acabe el tiempo o que se pase el nivel, que desaparezca el tipeo-container.
            (!tiempoTerminado && !juegoPerdido && !levelPassed) && letrasDePalabra.map((letra, index) => (
            <div
                key={ index } 
                className="tipeo-container__letra"> 
                { palabraTipeada.charAt(index).toUpperCase() } 
            </div>
            ))
        }
    </div>
  )
}
