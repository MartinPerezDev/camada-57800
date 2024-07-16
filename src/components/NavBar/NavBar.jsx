import "./navbar.css";
import CartWidget from "./CartWidget";
import logo from "../../assets/epic.png";
import { FaBasketballBall } from "react-icons/fa";
import { GiCrossbow } from "react-icons/gi";
import { LiaMountainSolid } from "react-icons/lia";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="" />
      </div>

      <ul className="categories">
        <div className="category">
          <p>Deportes</p>
          <div className="img-category">
            <FaBasketballBall size={40} />
          </div>
        </div>

        <div className="category">
          <p>Acción</p>
          <div className="img-category">
            <GiCrossbow size={40} />
          </div>
        </div>

        <div className="category">
          <p>Aventura</p>
          <div className="img-category">
            <LiaMountainSolid size={40} />
          </div>
        </div>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
