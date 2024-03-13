import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems();
  return (
    <>
      <div className="carritoMenu">
        <Link to="/cart">
          <FaShoppingCart color="orange" />
        </Link>
        <strong>{total}</strong>
      </div>
    </>
  );
};
