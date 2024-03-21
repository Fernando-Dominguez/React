import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems();
  return (
    <>
      <Button color="inherit" component={NavLink} to="/cart">
        <Badge badgeContent={total} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Button>
    </>
  );
};
