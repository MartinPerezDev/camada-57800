import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ComponentePadre from './components/Ejemplos/ComponentePadre'
import ComponenteHijo from './components/Ejemplos/ComponenteHijo'
import EjemploContador from './components/Ejemplos/EjemploContador'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo = "Bienvenidos a mi ecommerce" />

      <ComponentePadre>
        <h2>Saludos desde App</h2>
        <p>Esta es una descripcion</p>
        <ComponenteHijo />
      </ComponentePadre>

      <EjemploContador />
    </div>
  )
}

export default App
