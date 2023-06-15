"use client";

import { Box, Grid } from "@mui/material";
import Background from "./home.style";

import { Navbar, Map, RouteSettings } from "@/components";

export default function Home() {
  return (
    <Background>
      <Navbar />
      <Box className="mainContent">
        <RouteSettings />
        <Map />
      </Box>
    </Background>
  );
}
