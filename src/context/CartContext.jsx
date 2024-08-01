import { createContext, useState } from "react";

// Creamos un contexto llamado CartContext
const CartContext = createContext()

// Creamos un componente que servira como proveedor del contexto
// Este mismo envuelve los componentes que van a poder consumir la info del context
const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const agregarProducto = (productoNuevo) => {
    setCarrito( [ ...carrito, productoNuevo ] )

    //logica para sumar cantidades o agregar el producto como nuevo
  }

  //Funcion para detectar si el producto a añadir esta en el carrito o no

  const cantidadTotal = () => {
    const totalProductos = carrito.reduce( ( total, productoCarrito) => total + productoCarrito.cantidad, 0 )
    return totalProductos
  }

  const precioTotal = () => {
    const precio = carrito.reduce( (total, productoCarrito) => total + ( productoCarrito.cantidad * productoCarrito.precio ), 0 )
    return precio
  }

  const borrarProducto = (idProducto) => {
    const productosFiltrados = carrito.filter( (productoCarrito) => productoCarrito.id !== idProducto )
    setCarrito(productosFiltrados)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  console.log(carrito)

  return(
    <CartContext.Provider value={ { carrito, agregarProducto, cantidadTotal, precioTotal, borrarProducto, vaciarCarrito } } >
      { children }
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }