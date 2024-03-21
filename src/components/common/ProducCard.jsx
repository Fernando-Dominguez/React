import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProducCard = ({ img, title, desc, price, id }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ borderRadius: 5 }} align="center">
        <CardMedia component="img" height="auto" image={img} alt={title} />
        <CardContent sx={{ backgroundColor: "#f4f8f9" }}>
          <Typography variant="h5" fontWeight={700}>
            {title}
          </Typography>
          <Typography variant="body2">{desc}</Typography>
          <Typography variant="h5" paddingTop={2} fontWeight={900}>
            $ {price}
          </Typography>
        </CardContent>
        <Button component={Link} to={`/item/${id}`}>
          DETALLES
        </Button>
      </Card>
    </Grid>
  );
};
