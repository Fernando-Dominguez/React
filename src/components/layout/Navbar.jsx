import { NavLink } from "react-router-dom";
import { CartWidget } from "../common/CartWidget";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import DrawIcon from "@mui/icons-material/Draw";
import { menuNavigation } from "../router/menuNavigation";
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
            {menuNavigation.map(({ id, text, path }) => (
              <Button key={id} color="inherit" component={NavLink} to={path}>
                {text}
              </Button>
            ))}
          </Box>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </>
  );
};
