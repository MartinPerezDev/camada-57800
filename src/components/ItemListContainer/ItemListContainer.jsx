import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductsById, uploadProduct, modProduct, deleteProductById } from "../../utils/fetchApi.js"

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const newProduct = {
    nombre: "Stray Standard Edition",
    descripcion: "juego de gatos",
    categoria: "aventura",
    stock: 1,
    precio: 900,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_734257-MLA51179055855_082022-O.webp"
  }

  const clickEvento = () => {
    deleteProductById(1)
      .then((data)=> setProductos(data) )
    /*
    modProduct(3, { nombre: "Stray", precio: 250 })
      .then((data) => setProductos(data) )
    
    uploadProduct(newProduct)
      .then((data)=> setProductos(data))
    */
  }

  useEffect(() => {
    getProducts()
      .then( (data) => setProductos(data) )

    getProductsById(2)
      .then( (data) => console.log(data) )
  }, []);

  return (
    <div>
      <p>{saludo}</p>
      <button onClick={clickEvento} >Click</button>
      <ItemList productos={productos} />
    </div>
  );
};
export default ItemListContainer;
