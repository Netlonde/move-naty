"use client";

import Image from "next/image";
import Background, { Container } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <Background>
      <Container>
        <div className="logoContainer">
          <a>MOVENATY</a>
        </div>
        <div className="driverAndClientSections">
          <a>Driver</a>
          <a>Client</a>
        </div>
      </Container>
    </Background>
  );
};
