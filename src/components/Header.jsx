import { useContext } from 'react';
import { Context } from '../contexts/Context';
import { SectionInvitarJuego } from './SectionInvitarJuego';
import tipearIMG from '../images/tipearIMG.png';
import flechaAbajo from '../images/flechaAbajo.png';
import '../styles/Header.css'


export const Header = () => {

    const { juegoIniciado } = useContext(Context);
    return(
     <>
        <header>
            <div className='main-container'>
                <div className='header__container'>
                    <div className='header__container-title'>
                        <h1>Typing Speed Game</h1>
                        <p>¡Tipea tan rápido como puedas contra-reloj, y establece un nuevo record!</p>
                    </div>
                    <div className='header__container-img'>
                        <img src={ tipearIMG } alt='hombrecito-tipeando'/>
                    </div>
                </div>
                <a className='a__flecha' href='#'>
                    <img src={ flechaAbajo } alt='flecha'/>
                </a>
            </div>
                
        </header>
        <SectionInvitarJuego />
     </>
    )
}