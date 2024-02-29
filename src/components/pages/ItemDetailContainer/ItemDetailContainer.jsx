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
      {isLoading ? (
        <div className="cargando"><img src="https://res.cloudinary.com/dmlqg9nvh/image/upload/v1709208230/React%20JS/Loading_icon_h20kjn.gif" alt="spiner animado" /></div>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};
