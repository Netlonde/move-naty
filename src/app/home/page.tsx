"use client";

import { Box, Grid } from "@mui/material";
import Background from "./home.style";

import { Navbar, MyComponent, RouteSettings } from "@/components";

export default function Home() {
  return (
    <Background>
      <Navbar />
      <Box className="mainContent">
        <RouteSettings />
        <MyComponent />
      </Box>
    </Background>
  );
}
