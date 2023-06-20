"use client";

import { Box } from "@mui/material";
import Background from "./home.style";

import { Navbar, Map, RouteSettings, Loading } from "@/components";
import { InfoModal } from "@/components";
import useHomeController from "./home.controller";

export default function Home() {
  const { handleModalOpen, isOpenInfoModal, isSuccessfully, text, isLoading } =
    useHomeController();

  return (
    <Background>
      <Navbar />
      <Box className="mainContent">
        <RouteSettings />
        <Map />
      </Box>
      {isOpenInfoModal && (
        <InfoModal
          isSuccessfully={isSuccessfully}
          onClick={handleModalOpen}
          text={text}
        />
      )}
      {isLoading && <Loading />}
    </Background>
  );
}
