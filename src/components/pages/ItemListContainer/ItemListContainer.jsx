import { useParams } from "react-router-dom";

import { getProducts } from "../../productsMock";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";

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

  return <>{isLoading ? <h2>Cargando productos...</h2> : <ItemList products={products} />
      }</>;
};
