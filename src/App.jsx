import { useContext } from 'react'
import { Context } from './contexts/Context'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Juego } from './components/Juego'
import './App.css';


function App() {
  
  const { juegoIniciado } = useContext(Context)

  return (
    <div className="App">
      <Nav />
      {
        (!juegoIniciado)
          ? <Header />
            
          : <Juego />
      }
      
    </div>
  )
}

export default App
