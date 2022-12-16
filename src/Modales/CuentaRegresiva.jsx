import { useContext, useState } from 'react'
import '../styles/Modales.css'

export const CuentaRegresiva = ({ setPalabra }) => {

    const [ contador, setContador ] = useState(3)

    const disminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        } else {
            clearInterval(intervalo)
            setPalabra(true)
        }
        
    }

    let intervalo = setInterval(disminuirContador, 1000);

    return(
        <div className="modal">
            <p className='modal-contador'>
                { contador }
            </p>
        </div>
    )
}