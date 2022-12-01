import { useContext } from 'react';
import { Context } from '../contexts/Context';
import '../styles/Nav.css';

export const Nav = () => {
    const { puntaje, mejorPuntaje } = useContext(Context)
    return(
        <div className='main-container-menu'>
            <div className="header__menu">
                <span>Typing Speed Game</span>
                <nav>
                    <ul>
                        <li>Play</li>
                        <li>Puntaje: { puntaje }</li>
                        <li>Mi record: { mejorPuntaje }</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}