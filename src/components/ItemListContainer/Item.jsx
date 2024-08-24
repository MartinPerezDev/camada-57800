import React from 'react';
import { Link } from 'react-router-dom';

const Item = React.memo(
  ({ producto }) => {
    return (
      <div className="card">
        <div className="img-card">
          <img src={producto.imagen} alt="" />
        </div>
        <p>{producto.nombre}</p>
        <p>precio: ${producto.precio}</p>
        <Link
          className="link"
          to={'/detalle/' + producto.id}
        >
          Ver detalles
        </Link>
      </div>
    );
  },
  (oldProps, newProps) =>
    JSON.stringify(oldProps) === JSON.stringify(newProps)
);
export default Item;
