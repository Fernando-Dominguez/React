import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
  return (
    <>
      <div className="carritoMenu">
        <Link to="/cart">
          <FaShoppingCart color="orange" />
        </Link>
        <strong>4</strong>
      </div>
    </>
  );
};
