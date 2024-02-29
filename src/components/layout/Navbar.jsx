import { Link } from "react-router-dom";
import { CartWidget } from "../common/CartWidget";

export const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/">Estampando</Link>
        <ul>
          <Link to="/">Todo</Link>
          <Link to="/category/ecologicas">Ecologicas</Link>
          <Link to="/category/metalicos">Metalicos</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
