import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext);

  //Early return o return temprano
  if (carrito.length === 0) {
    return (
      <div>
        <h2>El carrito esta vacio 😥</h2>
        <Link to="/">Ver Productos</Link>
      </div>
    );
  }

  return (
    <div>
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {carrito.map((productoCarrito) => (
          <li style={{ display: 'flex', justifyContent: 'space-around' }}>
            <img width={150} src={productoCarrito.imagen} alt="" />
            <p>{productoCarrito.nombre}</p>
            <p>Cantidad: {productoCarrito.cantidad}</p>
            <p>Precio c/u: ${productoCarrito.precio}</p>
            <p>Precio parcial: ${productoCarrito.cantidad * productoCarrito.precio} </p>
            <button onClick={() => borrarProducto(productoCarrito.id)}>Borrar</button>
          </li>
        ))}
      </ul>

      <h2>Precio Total: {precioTotal()}</h2>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <Link to="/checkout">Seguir con mi compra</Link>
    </div>
  );
};
export default Cart;
