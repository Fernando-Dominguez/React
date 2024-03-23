import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ItemCount = ({ counter, sumar, restar, onAdd }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography> Cantidad: </Typography>
        <Button
          variant="outlined"
          sx={{ margin: 1 }}
          onClick={restar}
          disabled={counter === 1 ? true : false}
        >
          -
        </Button>
        <Typography> {counter} </Typography>
        <Button variant="outlined" sx={{ margin: 1 }} onClick={sumar}>
          +
        </Button>
      </Box>
      <Link to="/checkout">
        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: 1 }}
          onClick={() => {
            onAdd(counter, false);
          }}
        >
          Comprar Ahora
        </Button>
      </Link>
      <Button
        variant="outlined"
        fullWidth
        sx={{ marginTop: 1 }}
        onClick={() => {
          onAdd(counter, true);

        }}
      >
        Agregar al carrito
      </Button>
    </>
  );
};
