import { Box, Button, Typography } from "@mui/material";

const Baker = () => {
  return (
    <Box mt={2}>
      <Box mt={2} textAlign="center">
        <Typography variant="h3" gutterBottom>
          We Bake With Passion
        </Typography>
        <Typography variant="h6" gutterBottom>
          Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum
          ipsum.
        </Typography>
        <Button variant="contained" color="secondary">
          Read More
        </Button>
      </Box>
    </Box>
    //add ur componets here
  );
};

export { Baker };
