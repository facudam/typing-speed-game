import { useContext } from 'react'
import { Context } from './contexts/Context'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Juego } from './components/Juego'
import './App.css';
import { ReglasModal } from './Modales/ReglasModal'


function App() {
  
  const { juegoIniciado, isReglasModalOpen, setIsReglasModalOpen } = useContext(Context)

  return (
    <div className="App">
      <Nav />
      {
        (!juegoIniciado)
          ? <Header />
            
          : <Juego />
      }

      {
        isReglasModalOpen && <ReglasModal />
      }
      
    </div>
  )
}

export default App
