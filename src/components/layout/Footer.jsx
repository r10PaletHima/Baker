import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <div>
      <Box mt={5} py={3} bgcolor="text.secondary" color="white">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Follow us:</Typography>
              <IconButton color="inherit">
                <i className="fab fa-facebook-f"></i>
              </IconButton>
              <IconButton color="inherit">
                <i className="fab fa-twitter"></i>
              </IconButton>
              <IconButton color="inherit">
                <i className="fab fa-linkedin-in"></i>
              </IconButton>
              <IconButton color="inherit">
                <i className="fab fa-instagram"></i>
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Call Us</Typography>
              <Typography variant="body1">+012 345 6789</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box py={2} bgcolor="primary.dark" color="white">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                &copy; 2023 Baker. All rights reserved. | Career | Terms | Privacy
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export { Footer };
