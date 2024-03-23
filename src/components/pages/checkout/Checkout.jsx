import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const Checkout = ({
  envioDeFormulario,
  capturar,
  orderId,
  totalItems,
  total,
  userInfo,
}) => {
  return (
    <Box sx={{ minHeight: "calc(100vh - 132.5px)" }}>
      {orderId ? (
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
            <CardContent
              align="left"
              sx={{
                textAlign: "center",
                border: "1px solid #e1e4e8",
                margin: 2,
                borderRadius: 5,
                height: "100hb",
                padding: 5,
              }}
            >
              <Typography variant="h5" fontWeight={700} paddingBottom={5}>
                ¡Gracias por tu compra!
              </Typography>
              <Typography variant="h5" fontWeight={700} paddingBottom={5}>
                {userInfo.nombre}
              </Typography>
              <Typography variant="h6">Tú número de orden es:</Typography>
              <Box sx={{ display: "flex", alignContent: "center" }}>
                <Typography variant="h6" paddingTop={2} fontWeight={900}>
                  {orderId}
                </Typography>
              </Box>
              <Button
                variant="contained"
                component={NavLink}
                to="/"
                sx={{ margin: "30px 0px 20px" }}
              >
                Seguir comprando
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ) : (
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
                  Orden de compra
                </Typography>

                <form
                  onSubmit={envioDeFormulario}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "20px",
                    padding: "20px",
                  }}
                >
                  <TextField
                    label="Nombre *"
                    variant="outlined"
                    name="nombre"
                    onChange={capturar}
                    /* error={errors.nombre ? true : false}
                    helperText={errors.nombre} */
                  />

                  <TextField
                    label="Teléfono *"
                    variant="outlined"
                    name="telefono"
                    onChange={capturar}
                    /* error={errors.telefono ? true : false}
                    helperText={errors.telefono} */
                  />

                  <TextField
                    label="Email *"
                    variant="outlined"
                    name="email"
                    onChange={capturar}
                    /* error={errors.email ? true : false}
                    helperText={errors.email} */
                  />
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography variant="caption" padding={1} flexGrow={1}>
                      * Campo requerido.
                    </Typography>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: 200 }}
                    >
                      Realizar pedido
                    </Button>
                  </Box>
                </form>
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
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      )}
    </Box>
  );
};

/* <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
          />

          <input
            type="text"
            placeholder="Ingresa tu teléfono"
            onChange={capturar}
            name="phone"
          />

          <input
            type="text"
            placeholder="Ingresa tu mail"
            onChange={capturar}
            name="mail"
          />

          <button type="submit">enviar</button>
        </form> */
