import { useState, useEffect } from "react";
import obtenerProductos from "../../data/data.js";
import ItemList from "./ItemList";
import useLoading from "../../hooks/useLoading";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const { cargando, mostrarCargando, ocultarCargando } = useLoading();
  

  useEffect(() => {
    mostrarCargando();

    obtenerProductos()
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        ocultarCargando();
      });
  }, []);

  return (
    <div>
      <p>{saludo}</p>
      {cargando ? <div>Cargando...</div> : <ItemList productos={productos} />}
    </div>
  );
};
export default ItemListContainer;
