import { useState, useEffect } from "react";
import obtenerProductos from "../../data/data.js";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos()
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalizo la promesa");
      });
  }, []);

  return (
    <div>
      <p>{saludo}</p>
      <ItemList productos={productos} />
    </div>
  );
};
export default ItemListContainer;
