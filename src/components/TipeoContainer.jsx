import { useContext } from "react"
import { Context } from "../contexts/Context"


export const TipeoContainer = ({ palabraTipeada, letrasDePalabra }) => {

    const { tiempoTerminado, juegoPerdido} = useContext(Context)

  return (
    <div className="tipeo-container">
        {   //En caso de perder o que se acabe el tiempo que desaparezca el tipeo-container.
            (!tiempoTerminado && !juegoPerdido) && letrasDePalabra.map((letra, index) => (
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
