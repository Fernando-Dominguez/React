import { ViewColumn } from "@mui/icons-material";
import { Box, Grid, Skeleton, Stack } from "@mui/material";

export const ItemSkeleton = () => {
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
      <Skeleton
        variant="rounded"
        width={"85%"}
        height={"70vh"}
        animation="wave"
      />
    </Grid>
  );
};
