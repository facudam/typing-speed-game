import { useContext } from 'react';
import { Context } from '../contexts/Context';
import '../styles/SectionInvitarJuego.css';

export const SectionInvitarJuego = () => {

    const { setJuegoIniciado } = useContext(Context);

    return (
        <section className="Section-invitar-juego-container">
            <h2>Pon a prueba tus habilidades</h2>
            <p>Haz click en 'JUGAR' y apresúrate a tipear para ganar</p>
            <button
                onClick={ () => setJuegoIniciado(true)}
                >
                JUGAR
            </button>
        </section>
    )
}