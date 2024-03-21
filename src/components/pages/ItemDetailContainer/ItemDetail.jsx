import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ItemCountContainer } from "../../common/ItemCount/ItemCountContainer";

export const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <Grid
      container
      spacing={2}
      padding={4}
      alignContent={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "calc(100vh - 116px)",
      }}
    >
      <Card
        sx={{
          borderRadius: 5,
          display: "flex",
          justifyContent: "space-between",
        }}
        align="center"
      >
        <CardMedia
          component="img"
          height="auto"
          sx={{ width: "60%", margin: 2 }}
          image={item.imageUrl}
          alt={item.title}
        />

        <CardContent
          align="left"
          sx={{
            border: "1px solid #e1e4e8",
            margin: 2,
            borderRadius: 5,
            height: "100hb",
          }}
        >
          <Typography variant="h5" fontWeight={700} paddingBottom={2}>
            {item.title}
          </Typography>
          <Typography variant="body2">{item.description}</Typography>
          <Typography variant="h5" paddingTop={2} fontWeight={900}>
            $ {item.price}
          </Typography>
          <Typography variant="body2"> {item.stock} Disponibles</Typography>
          <ItemCountContainer
            stock={item.stock}
            onAdd={onAdd}
            initial={initial}
          />
          <Typography
            variant="body2"
            sx={{ textAlign: "center", padding: "20px 0px" }}
          >
            {initial && <> Ya tienes {initial} unidad/es en el carriro </>}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
