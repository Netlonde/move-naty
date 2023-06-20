"use client";

import { MobileNavbarModal } from "../MobileNavbarModal/MobileNavbarModal";
import useNavbarController from "./Navbar.controller";
import Background, { Container } from "./Navbar.style";
import { Box, Link } from "@mui/material";

export const Navbar = () => {
  const { handleOpenMobileNavbarModal, isOpenMobileNavbarModal } =
    useNavbarController();
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
          <Link underline="none" href="/client">
            Cliente
          </Link>
          <Link underline="none" href="/vehicles">
            Veículo
          </Link>
          <Link underline="none" href="/displacement">
            Deslocamento
          </Link>
        </Box>
        <Box className="MobileContainer" onClick={handleOpenMobileNavbarModal}>
          &#9776;
        </Box>
        {isOpenMobileNavbarModal && (
          <MobileNavbarModal handleModalClose={handleOpenMobileNavbarModal} />
        )}
      </Container>
    </Background>
  );
};
