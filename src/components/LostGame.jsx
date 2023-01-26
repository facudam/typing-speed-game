import { Perdiste } from "../Modales/Perdiste"
import { PuntosObtenidos } from "../Modales/PuntosObtenidos"
import failure from "../sonidos/failure.mp3"

export const LostGame = () => {

    return(
        <>
            <Perdiste />
            <PuntosObtenidos />
            <audio src={ failure } autoPlay />
        </>
    )
}