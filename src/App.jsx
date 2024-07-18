import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ListarProductosConHoc from './components/Ejemplos/HOC/ListarProductos'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo = "Bienvenidos a mi ecommerce" />
      <ItemDetailContainer />

      <ListarProductosConHoc />
    </div>
  )
}

export default App
