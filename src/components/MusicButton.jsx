import { useContext } from 'react'
import { Context } from '../contexts/Context'
import musicImage from '../images/music.svg'
import '../styles/Juego.css'

export const MusicButton = ({ toggleMusic }) => {

    const { aparecerPalabra } = useContext(Context);

    return(
        <div className= 'muted-btn-container' >
            <img src={ musicImage } alt='Music logo' />
                <input type='checkbox' id='muted-btn'
                    onInput={() => toggleMusic()}
                />
            <label htmlFor='muted-btn' className='muted-switch'></label>
        </div>
    )
}