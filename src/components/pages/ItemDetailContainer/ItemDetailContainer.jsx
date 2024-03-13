import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getProduct } from "../../productsMock";
import { CartContext } from "../../../context/CartContext";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  let initial = getTotalQuantityById(id);
  console.log(initial);

  useEffect(() => {
    getProduct(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, []);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
  };

  return (
    <>
      {isLoading ? (
        <div className="cargando">
          <img
            src="https://res.cloudinary.com/dmlqg9nvh/image/upload/v1709208230/React%20JS/Loading_icon_h20kjn.gif"
            alt="spiner animado"
          />
        </div>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} initial={initial} />
      )}
    </>
  );
};
