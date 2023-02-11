import { useContext } from 'react'
import { Context } from '../contexts/Context'
import teclaSonido from '../sonidos/tipearTecla.mp3'
import '../styles/Teclado.css'


export const Teclas = ({titulo}) => {

    const { teclaPresionada, setTeclaPresionada } = useContext(Context)


    const activarSonidoTecla = () => {
        setTeclaPresionada(true)
        setTimeout(() => {
            setTeclaPresionada(false)
        }, 100)
    }

    return(
        <div className='teclas-container'>
            {
                titulo.map((letra, index) => (
                    <div
                        onMouseOver={ activarSonidoTecla } 
                        className='teclas-container__letra'>
                        <p className="letra-title" key={ index }>
                            {letra}
                        </p>
                    </div>
                    
                ))
            }
            {
               teclaPresionada && <audio src={ teclaSonido } autoPlay /> 
            }  
        </div>
    )
}