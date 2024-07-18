import hocSearchBar from "./hocSearchBar"

const ListarProductos = ({ productos }) => {
  return (
    <div>
      {
        productos.map((producto)=> (
          <div key={producto.id} >
            <p>{producto.title}</p>
          </div>
        ))
      }
    </div>
  )
}

const ListarProductosConHoc = hocSearchBar( ListarProductos)

export default ListarProductosConHoc