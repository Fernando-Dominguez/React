import { useParams } from "react-router-dom";

import { getProducts } from "../../productsMock";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css"
export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      if (category) {
        const productsFilter = resp.filter(
          (product) => product.category === category
        );
        setProducts(productsFilter);
      } else {
        setProducts(resp);
      }
      setIsLoading(false);
    });
  }, [category]);

  return <>{isLoading ? <div className="cargando"><img src="https://res.cloudinary.com/dmlqg9nvh/image/upload/v1709208230/React%20JS/Loading_icon_h20kjn.gif" alt="spiner animado" /></div> : <ItemList products={products} />
      }</>;
};
