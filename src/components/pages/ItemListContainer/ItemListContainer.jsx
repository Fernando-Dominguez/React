import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Container, Grid } from "@mui/material";
import { CardSkeleton } from "../../common/CardSkeleton";

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

  if (isLoading) {
    return (
      <Container>
        <Grid
          container
          sx={{
            minHeight: "calc(100vh - 116px)",
          }}
          spacing={2}
          padding={4}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </Grid>
      </Container>
    );
  }

  return (
    <>
      <ItemList products={products} />
    </>
  );
};
