import { useContext } from "react";
import { Context } from "../contexts/Context";
import { PuntosObtenidos } from "../Modales/PuntosObtenidos"
import { TiempoAcabado } from "../Modales/TiempoAcabado";
import endgame from '../sonidos/endgame.mp3'

export const TimeOver = () => {

    const { musicOn } = useContext(Context)

    return(
        <>
            <TiempoAcabado />
            <PuntosObtenidos />

            {
                musicOn && <audio src={ endgame } autoPlay />
            }

            
            
        </>
    )
}