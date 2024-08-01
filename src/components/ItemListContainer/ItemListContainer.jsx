import { useState, useEffect } from "react";
import obtenerProductos from "../../data/data.js";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import { ClimbingBoxLoader } from "react-spinners";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);
  const { idCategoria } = useParams();

  useEffect(() => {
    //mostramos la pantalla de carga
    setEstaCargando(true)

    obtenerProductos()
      .then((respuesta) => {
        if (idCategoria) {
          //filtrar los productos por esa categoria recibida
          const productosFiltrados = respuesta.filter((producto) => producto.categoria === idCategoria);
          setProductos(productosFiltrados);
        } else {
          //guardamos todos los productos
          setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        //ocultamos la pantalla de carga, una vez que la promesa finalizo
        setEstaCargando(false)
      });
  }, [idCategoria]);

  return (
    <div>
      <p>{saludo}</p>
      {estaCargando ? <div> <ClimbingBoxLoader color="white" /> </div> : <ItemList productos={productos} />}
    </div>
  );
};
export default ItemListContainer;
