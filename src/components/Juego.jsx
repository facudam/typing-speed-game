import { useContext } from 'react';
import { Context } from '../contexts/Context';
import '../styles/Juego.css';

export const Juego = () => {

    const { setJuegoIniciado } = useContext(Context);

    return (
        <section className="juego-container">
            <h2>Pon a prueba tus habilidades</h2>
            <p>Haz click en 'JUGAR' y apresurate a tipear para ganar</p>
            <button
                onClick={ () => setJuegoIniciado(true)}
                >
                JUGAR
            </button>
        </section>
    )
}