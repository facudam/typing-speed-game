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
                        <li>Puntaje: { puntaje } pts.</li>
                        <li>Mi record: <span className='span-record'>{ mejorPuntaje } pts.</span> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}