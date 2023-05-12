import '../styles/Header.css'
import { useContext } from 'react';
import { Context } from '../contexts/Context';


export const Header = () => {

    const { setJuegoIniciado } = useContext(Context);

    return(
     <>
        <header>
            <div className='main-container'>
                <div className='header__container'>
                    <div className='header__container-title'>
                        <h1><span>Typing</span> <span>Speed</span> <span>Game</span></h1>
                        <p>Pon a prueba tus habilidades ¡Tipea tan rápido como puedas contra-reloj y establece un nuevo record! Haz click en 'Ir a juego' y ¡Apresúrate a tipear para ganar!</p>
                        <p></p> 
                    </div>
                    <button
                        onClick={ () => setJuegoIniciado(true)}>
                        Ir a Juego
                    </button>  
                </div>          
            </div>       
        </header>
        
     </>
    )
}