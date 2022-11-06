import tipearIMG from '../images/tipearIMG.png';
import { Nav } from './Nav';

import '../styles/Header.css'

export const Header = () => {
    return(
        <header>
            <Nav />
            <div className='main-container'>
                <div className='header__container'>
                    <div className='header__container-title'>
                        <h1>Typing Speed Game</h1>
                        <p>¡Tipea tan rápido como puedas contra-reloj, y establece un nuevo record!</p>
                    </div>
                    <div className='header__container-img'>
                        <img src={ tipearIMG }/>
                    </div>
                </div>
            </div>
            
            
        </header>
    )
}