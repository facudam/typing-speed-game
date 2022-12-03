import { useContext } from 'react'
import { Context } from './contexts/Context'
import { Header } from './components/Header'
import { Juego } from './components/Juego'
import './App.css'
import { Nav } from './components/Nav'

function App() {
  
  const { juegoIniciado } = useContext(Context)

  return (
    <div className="App">
      <Nav />
      {
        (!juegoIniciado)
          ? <Header />
            
          : <p className='juego-iniciado'>Juego Iniciado</p>
      }
      
    </div>
  )
}

export default App
