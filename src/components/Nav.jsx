import { useContext } from 'react';
import { Context } from '../contexts/Context';
import '../styles/Nav.css';

export const Nav = () => {
    const { puntaje, mejorPuntaje } = useContext(Context)
    return(
        <div className='main-container-menu'>
            <div className="header__menu">
                <span><a href='https://typing-speed-game-1.netlify.app/'>Typing Speed Game</a></span>
                <nav>
                    <ul>
                        <li>Puntaje: { puntaje } pts.</li>
                        <li>Mi record: <span className='span-record'>{ mejorPuntaje } pts.</span> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}