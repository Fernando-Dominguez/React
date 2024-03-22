import { NavLink } from "react-router-dom";
import { CartWidget } from "../common/CartWidget";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import DrawIcon from "@mui/icons-material/Draw";
export const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            sx={{ display: "flex" }}
          >
            <DrawIcon sx={{ paddingRight: 1, fontSize: "3rem" }} />
            <Typography variante="h6" fontSize="1.5rem" fontWeight={700}>
              BOLIGRAFOS
            </Typography>
          </Button>
          <Box>
            <Button color="inherit" component={NavLink} to="/">
              Todo
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/category/ecologicas"
            >
              Ecologicos
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/category/metalicos"
            >
              Metalicos
            </Button>
          </Box>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </>
  );
};
