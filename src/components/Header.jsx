import tipearIMG from '../images/tipearIMG.png';
import { Nav } from './Nav';

export const Header = () => {
    return(
        <header>
            <Nav />
            <div>
                <div>
                    <h1>Typing Speed Game</h1>
                    <p>¡Tipea tan rápido como puedas contra-reloj, y establece un nuevo record!</p>
                </div>
                <div>
                    <img src={ tipearIMG }/>
                </div>
            </div>
            
            
        </header>
    )
}