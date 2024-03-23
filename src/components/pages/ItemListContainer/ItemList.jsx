import { Container, Grid } from "@mui/material";
import { ProducCard } from "../../common/ProducCard";

export const ItemList = ({ products }) => {
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
        {products.map(({ id, imageUrl, title, description, price, stock }) => {
          return (
            <ProducCard
              key={id}
              img={imageUrl}
              title={title}
              desc={description}
              price={price}
              id={id}
              stock={stock}
            />
          );
        })}
      </Grid>
    </Container>
  );
};
