import { Teclas } from "./Teclas";
import '../styles/Teclado.css'


export const TecladoTitle = () => {

    let typing = ['t', 'i', 'p', 'i', 'n', 'g'],
        speed = ['s', 'p', 'e', 'e', 'd'],
        game = ['g', 'a', 'm', 'e'];

    return(
        <div className="teclado">
            <Teclas titulo={ typing } />
            <Teclas titulo={ speed } />
            <Teclas titulo={ game } />
        </div>
    )
}