import { Grid, Skeleton, Stack } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Stack variant="rounded" width={"auto"} spacing={1}>
        {/* For variant="text", adjust the height via font-size */}

        <Skeleton
          variant="rounded"
          width={"auto"}
          height={200}
          animation="wave"
        />
        {/* For other variants, adjust the size with `width` and `height` */}

        <Skeleton
          variant="text"
          sx={{ alignSelf: "center", fontSize: "3rem", width: "90%" }}
          animation="wave"
        />
        <Skeleton
          variant="text"
          sx={{ alignSelf: "center", fontSize: "2rem", width: "80%" }}
          animation="wave"
        />
        <Skeleton
          variant="text"
          sx={{ alignSelf: "center", fontSize: "3rem", width: "30%" }}
        />
        <Skeleton
          variant="text"
          sx={{ alignSelf: "center", fontSize: "0.8rem", width: "60%" }}
          animation="wave"
        />
        <Skeleton
          variant="rounded"
          width={"auto"}
          height={40}
          animation="wave"
        />
      </Stack>
    </Grid>
  );
};
