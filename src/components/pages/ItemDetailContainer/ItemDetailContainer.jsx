import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getProduct } from "../../productsMock";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? <h2>Cargando producto...</h2> : <ItemDetail item={item} />}
    </>
  );
};
