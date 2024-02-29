import { Link } from "react-router-dom";
import { CartWidget } from "../common/CartWidget";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <Link to="/" className="logoEmpresa">Boligrafos</Link>
        <ul className="menuCategorias">
          <Link to="/"><li>Todo</li></Link>
          <Link to="/category/ecologicas"><li>Ecologicas</li></Link>
          <Link to="/category/metalicos"><li>Metalicos</li></Link>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};
