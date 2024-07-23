import React from "react";
import { Box, Container } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 2 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export { Layout };
