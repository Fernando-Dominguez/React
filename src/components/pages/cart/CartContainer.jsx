import { Link } from "react-router-dom";
import "./CartContainer.css";
import { Checkout } from "../checkout/Checkout";

export const CartContainer = () => {
  return (
    <div className="carritoContainer">
      <h2>Carrito</h2>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};
