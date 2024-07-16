//obtener productos
const getProducts = () => {
  return fetch("http://localhost:8080/api/productos")
    .then((respuesta) => {
      return respuesta.json()
    })
    .catch((error) => console.log(error))
}

//obtener producto por su id
const getProductsById = (idProducto) => {
  return fetch(`http://localhost:8080/api/productos/${idProducto}`)
    .then((respuesta) => {
      return respuesta.json()
    })
    .catch((error) => console.log(error))
}

//subiendo un producto
const uploadProduct = (newProduct) => {
  return fetch("http://localhost:8080/api/productos/", {
    method: "POST",
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newProduct)
  })
    .then((respuesta) => {
      return respuesta.json()
    })
    .catch((error) => console.log(error))
}

//modificar un producto
const modProduct = (idProducto, mod) => {
  return fetch(`http://localhost:8080/api/productos/${idProducto}`, {
    method: "PUT",
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(mod)
  })
    .then((respuesta) => {
      return respuesta.json()
    })
    .catch((error) => console.log(error))
}

//borrar un producto por su id
const deleteProductById = (idProducto) => {
  return fetch(`http://localhost:8080/api/productos/${idProducto}`, {
    method: "DELETE"
  })
    .then((respuesta)=>{
      return respuesta.json()
    })
    .catch((error) => console.log(error))
}

export { getProducts, getProductsById, uploadProduct, modProduct, deleteProductById }