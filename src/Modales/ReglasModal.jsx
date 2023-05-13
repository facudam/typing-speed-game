import ReactDOM from "react-dom";
import '../styles/ReglasModal.css'
import { useContext } from "react";
import { Context } from "../contexts/Context";

export const ReglasModal = () => {

    const {isReglasModalOpen, setIsReglasModalOpen} = useContext(Context)

    return ReactDOM.createPortal(
      <>
        <div className="full-screen"></div>
        <div className="reglas-modal">
            <div className="reglas-modal__btn-container">
                <button
                    onClick={() => setIsReglasModalOpen(false) }
                >
                    cerrar
                </button>
            </div>
            <h2>Reglas del juego</h2>
            <ol>
                <li>Deberás tipear correctamente todas las palabras que aparecerán en pantalla.</li>
                <li>Tienes un tiempo límite para hacerlo.</li>
                <li>La cantidad de palabras a tipear irá aumentando como así también su dificultad.</li>
                <li>El tiempo límite puede irse reduciendo.</li>
                <li>Las palabras no deben ser escritas con tildes.</li>

            </ol>
        </div>
      </>,
      document.getElementById('portal')
    )
}