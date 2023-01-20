import { useContext } from "react"
import { Context } from "../contexts/Context"
import '../styles/Modales.css'

export const PuntosObtenidos = () => {

    const { puntaje } = useContext(Context)
    return(
        <div className="puntos-obtenidos">
            <p>Cantidad de palabras escritas correctamente: <span>{ puntaje / 10 }</span></p>
            <p>Puntos obtenidos: <span>{ puntaje }</span></p>
        </div>
    )
}