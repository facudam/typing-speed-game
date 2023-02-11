import '../styles/Modales.css'
import 'animate.css';
import trofeo from '../images/trofeo.svg'

export const NivelSuperado = () => {

    return(
        <div className='nivel-superado'>
            <p className={`congrats`}>¡Excelente, pasaste de nivel!</p>
            <img className='animate__heartBeat' src={ trofeo } alt='trofeo, premio'/>
        </div>
    )
    
}