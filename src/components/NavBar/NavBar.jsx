import "./navbar.css";
import CartWidget from "./CartWidget";
import logo from "../../assets/epic.png";
import { FaBasketballBall } from "react-icons/fa";
import { BiBullseye } from "react-icons/bi";
import { LiaMountainSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="" />
      </Link>

      <ul className="categories">
        <Link to="/categoria/deportes" className="category">
          <p>Deportes</p>
          <div className="img-category">
            <FaBasketballBall size={40} />
          </div>
        </Link>

        <Link to="/categoria/aventura" className="category">
          <p>Aventura</p>
          <div className="img-category">
            <LiaMountainSolid size={40} />
          </div>
        </Link>

        <Link to="/categoria/accion" className="category">
          <p>Acción</p>
          <div className="img-category">
            <BiBullseye size={40} />
          </div>
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
