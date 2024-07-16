import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  const agregarAlCarrito = (count) => {
    console.log(count)
  }

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo = "Bienvenidos a mi ecommerce" />
      <ItemCount stock={5} agregarAlCarrito={agregarAlCarrito} />
    </div>
  )
}

export default App
