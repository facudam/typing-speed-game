import ReactDOM from 'react-dom'
import '../styles/Modales.css'
import 'animate.css';
import trofeo from '../images/trofeo.svg'
import { Requerimientos } from './Requerimientos';
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

export const NivelSuperado = () => {

  jsConfetti.addConfetti({
    confettiColors: [
      '#ff0a54', '#2196f3', '#ff7096', '#10ed10', '#ffd700', '#f0f8ff',
    ],
  })

  jsConfetti.addConfetti()

    return ReactDOM.createPortal(
      <>
        <div className='full-screen'></div>
        <div className='nivel-superado'>
            <p className='congrats'>¡Enhorabuena! ¡Lo has conseguido!</p>
            <div className='nivel-superado__requerimientos'>
                <img src={ trofeo } alt='trofeo, premio'/>
                <Requerimientos />
            </div>
            
        </div>
      </>,
      document.getElementById('portal')
    )
    
}