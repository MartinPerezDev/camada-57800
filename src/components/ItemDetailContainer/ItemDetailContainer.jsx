import { useState, useEffect } from "react"
import obtenerProductos from "../../data/data.js"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})

  useEffect( ()=> {
    
    obtenerProductos()
    .then((data)=> {
      const productoEncontrado = data.find( (productoData) => productoData.id === "Frg333")
      setProducto(productoEncontrado)
    })
    
  }, [] )
  
  return (
    <ItemDetail producto={producto} />
  )
}
export default ItemDetailContainer