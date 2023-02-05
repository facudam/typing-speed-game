import { useContext } from "react"
import { Context } from "../contexts/Context"
import { NivelSuperado } from "../Modales/NivelSuperado"
import ganaste from '../sonidos/ganaste.mp3'


export const YouWin = () => {

    const { musicOn } = useContext(Context)

    return(
        <>
            <NivelSuperado /> 
            {
                musicOn && <audio src={ ganaste } autoPlay ></audio>
            }
        </>
    )
}