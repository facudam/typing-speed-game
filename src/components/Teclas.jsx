import '../styles/Teclado.css'


export const Teclas = ({titulo}) => {

    return(
        <div className='teclas-container'>
            {
                titulo.map((letra, index) => (
                    <div className='teclas-container__letra'>
                        <p className="letra-title" key={ index }>
                            {letra}
                        </p>
                    </div>
                    
                ))
            }  
        </div>
    )
}