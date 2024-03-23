import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Box, CircularProgress } from "@mui/material";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Conectando con la DB y la collection "products"
    let productsCollection = collection(db, "products");
    // Consulta por defecto trae todos los productos
    let consulta = productsCollection;
    // Filtrado por categoria usando query, where y useParams
    if (category) {
      let productsCollectionFilter = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFilter;
    }
    // Trayendo los productos en un array con todas sus propiedades y el ID
    getDocs(consulta)
      .then((res) => {
        let arrayComplete = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setProducts(arrayComplete);
      })
      // Terminando el Loading con un false
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            minHeight: "calc(100vh - 132.5px)",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} />
        </Box>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
