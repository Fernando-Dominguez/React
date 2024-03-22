import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";
import { ItemCount } from "../../common/ItemCount/ItemCount";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice, getTotalItems } =
    useContext(CartContext);
  let total = getTotalPrice();
  let totalItems = getTotalItems();

  const limpiarConAlerta = () => {
    Swal.fire({
      title: "Seguro quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          showConfirmButton: false,
          timer: 1500,
          position: "center",
        });
      }
    });
  };

  return (
    <Container>
      <Grid
        padding={3}
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          maxWidth: 1200,
          minHeight: "calc(100vh - 116px)",
        }}
      >
        <Grid item xs={12} sm={8}>
          <Card
            margin={1}
            sx={{
              borderRadius: 5,
            }}
          >
            <Typography variant="h6" padding={3} borderBottom={1}>
              Boligrafos
            </Typography>
            {cart.map((product) => (
              <Box
                key={product.id}
                borderBottom={1}
                padding={3}
                sx={{ display: "flex" }}
              >
                <CardMedia
                  component="img"
                  height="auto"
                  sx={{ width: "12%", objectFit: "cover", marginRight: 2 }}
                  image={product.imageUrl}
                  alt={product.title}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography>Cantidad: {product.quantity}</Typography>

                  <Button variant="text" onClick={() => removeById(product.id)}>
                    Eliminar
                  </Button>
                </Box>
                <Box>
                  <Typography variant="h6">$ {product.price}</Typography>
                </Box>
              </Box>
            ))}
            <Box textAlign={"center"} padding={1}>
              <Button variant="text" onClick={limpiarConAlerta}>
                Vaciar carrito
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            margin={1}
            sx={{
              borderRadius: 5,
            }}
          >
            <Typography variant="h6" padding={3} borderBottom={1}>
              Resumen de compra
            </Typography>
            <Box padding="10px 24px" sx={{ display: "flex" }}>
              <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
                Productos: ({totalItems})
              </Typography>
              <Typography variant="subtitle2">$ {total}</Typography>
            </Box>
            <Box padding="10px 24px">
              <Typography variant="subtitle2">Envio:</Typography>
              <Typography variant="subtitle2">Código de Cupon:</Typography>
              <Box
                borderTop={1}
                marginTop={2}
                paddingTop={2}
                sx={{ display: "flex" }}
              >
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Total a pagar:
                </Typography>
                <Typography variant="h6">$ {total}</Typography>
              </Box>
              <Link to="/checkout">
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ margin: "30px 0px 20px" }}
                >
                  Finalizar compra
                </Button>
              </Link>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
