import { useContext, useState } from 'react'
import { Context } from '../contexts/Context'
import countdown from '../sonidos/321.mp3'
import '../styles/Modales.css'


export const CuentaRegresiva = ({ setPalabra }) => {

    const { musicOn, setSegundosActivados } = useContext(Context)

    const [ contador, setContador ] = useState(3)

    const disminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        } else {
            clearInterval(intervalo)
            setPalabra(true)
            setSegundosActivados(true)
        }
        
    }

    let intervalo = setInterval(disminuirContador, 1000);

    return(
        <div className="modal">
            <p className='modal-contador'>
                { contador }
            </p>

            {
                musicOn && <audio src={ countdown } autoPlay/>
            }

            
        </div>
    )
}