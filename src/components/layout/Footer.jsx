import { Box, Button, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976D2",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        textAlign="center"
        boxShadow="3"
        sx={{ p: 2, color: "white", fontSize: "1rem" }}
      >
        <Button color="inherit">by Fernando Dominguez</Button>
      </Typography>
    </Box>
  );
};
