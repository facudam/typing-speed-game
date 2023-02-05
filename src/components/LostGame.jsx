import { useContext } from "react"
import { Context } from "../contexts/Context"
import { Perdiste } from "../Modales/Perdiste"
import { PuntosObtenidos } from "../Modales/PuntosObtenidos"
import failure from "../sonidos/failure.mp3"

export const LostGame = () => {

    const { musicOn } = useContext(Context)

    return(
        <>
            <Perdiste />
            <PuntosObtenidos />

            {
                musicOn && <audio src={ failure } autoPlay />
            }
            
        </>
    )
}