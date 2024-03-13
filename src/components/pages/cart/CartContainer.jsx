import { Link } from "react-router-dom";
import "./CartContainer.css";
import { Checkout } from "../checkout/Checkout";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  return (
    <div className="carritoContainer">
      {cart.map((product) => (
        <div key={product.id}>
          <h2>Nombre: {product.title}</h2>
          <h2>Cantidad: {product.quantity}</h2>
          <button onClick={() => removeById(product.id)}>Eliminar</button>
          <hr />
        </div>
      ))}
      <h2>Total a pagar: {total}</h2>
      <button onClick={clearCart}>Limiar carrito</button>

      <h2>Carrito</h2>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};
