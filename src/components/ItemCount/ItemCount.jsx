import { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [count, setCount] = useState(1);

  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemcount">
      <div className="controls">
        <button onClick={disminuir}>-</button>
        <p>{count}</p>
        <button onClick={aumentar}>+</button>
      </div>

      <button className="add" onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;
