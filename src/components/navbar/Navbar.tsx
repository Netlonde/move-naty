"use client";

import Background, { Container } from "./Navbar.style";
import { Box, Link } from "@mui/material";

export const Navbar = () => {
  return (
    <Background>
      <Container>
        <Box className="logoContainer">
          <Link underline="none">MOVENATY</Link>
        </Box>
        <Box className="driverAndClientSections">
          <Link underline="none">Driver</Link>
          <Link underline="none">Client</Link>
        </Box>
      </Container>
    </Background>
  );
};
