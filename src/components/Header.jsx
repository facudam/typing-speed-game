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
                        <h1>Typing Speed Game</h1>
                        <p>Pon a prueba tus habilidades ¡Tipea tan rápido como puedas contra-reloj, y establece un nuevo record!</p>
                        <p>Haz click en 'Ir a juego' y ¡apresúrate a tipear para ganar!</p> 
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