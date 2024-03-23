import { Box, Button, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export const ItemCount = ({ counter, sumar, restar, onAdd, stock }) => {
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
        <Typography> {stock === 0 ? 0 : counter} </Typography>
        <Button variant="outlined" sx={{ margin: 1 }} onClick={sumar} 
          disabled={stock === 0 ? true : false}>
          +
        </Button>
      </Box>

      <Button
        component={NavLink}
        to={"/checkout"}
        variant="contained"
        fullWidth
        sx={{ marginTop: 1 }}
        onClick={() => {
          onAdd(counter, false);
        }}
        disabled={stock === 0 && true}
      >
        Comprar Ahora
      </Button>

      <Button
        variant="outlined"
        fullWidth
        sx={{ marginTop: 1 }}
        onClick={() => {
          onAdd(counter, true);
        }}
        disabled={stock === 0 && true}
      >
        Agregar al carrito
      </Button>
    </>
  );
};
