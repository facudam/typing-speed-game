import ReactDOM from 'react-dom'
import '../styles/Modales.css'
import 'animate.css';
import trofeo from '../images/trofeo.svg'
import { Requerimientos } from './Requerimientos';

export const NivelSuperado = () => {

    return ReactDOM.createPortal(
      <>
        <div className='full-screen'></div>
        <div className='nivel-superado'>
            <p className='congrats'>¡Enhorabuena! ¡Lo has conseguido!</p>
            <div className='nivel-superado__requerimientos'>
                <img className='animate__heartBeat' src={ trofeo } alt='trofeo, premio'/>
                <Requerimientos />
            </div>
            
        </div>
      </>,
      document.getElementById('portal')
    )
    
}