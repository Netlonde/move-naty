"use client";

import Background, { Container } from "./Navbar.style";
import { Box, Link } from "@mui/material";

export const Navbar = () => {
  return (
    <Background>
      <Container>
        <Box className="logoContainer">
          <Link underline="none" href="/home">
            MOVENATY
          </Link>
        </Box>
        <Box className="driverAndClientSections">
          <Link underline="none" href="/driver">
            Condutor
          </Link>
          <Link underline="none">Cliente</Link>
        </Box>
      </Container>
    </Background>
  );
};
