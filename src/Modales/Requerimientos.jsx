import { useContext } from "react"
import { Context } from "../contexts/Context"
import '../styles/Modales.css'


export const Requerimientos = () => {

    const { currentLevel } = useContext(Context)

    let aciertoSolicitado,
        segundosDeJuego;

    switch (currentLevel) {
        case 1 :
            aciertoSolicitado = 3;
            segundosDeJuego = 15;
            break;
        case 2:
            aciertoSolicitado = 3;
            segundosDeJuego = 12;
            break;
        case 3:
            aciertoSolicitado = 4;
            segundosDeJuego = 10;
            break;
        case 4:
            aciertoSolicitado = 3;
            segundosDeJuego = 10;
            break;
        case 5:
            aciertoSolicitado = 4;
            segundosDeJuego = 9;
            break;
        case 6:
            aciertoSolicitado = 4;
            segundosDeJuego = 8;
            break;
        default:
            aciertoSolicitado = 'Sin límite';
            segundosDeJuego = 100;
            break;
    }

  return (
    <div className="requerimientos">
        <p>Próximo Nivel: <span>{ currentLevel + 1 }</span></p>
        <p>Palabras Requeridas: <span>{ aciertoSolicitado }</span></p>
        <p>Tiempo de Juego: <span>{ segundosDeJuego } segundos</span></p>
    </div>
  )
}
