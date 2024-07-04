import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

  return(
    <nav className="navbar">
      <div className="brand">
        Ecommerce
      </div>
      <ul>
        <li>Camperas</li>
        <li>Buzos</li>
        <li>Pilotos</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar