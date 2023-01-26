import { PuntosObtenidos } from "../Modales/PuntosObtenidos"
import { TiempoAcabado } from "../Modales/TiempoAcabado";
import endgame from '../sonidos/endgame.mp3'

export const TimeOver = () => {

    return(
        <>
            <TiempoAcabado />
            <PuntosObtenidos />
            <audio src={ endgame } autoPlay />
        </>
    )
}