"use client";

import { useDriverController } from "./driver.controller";
import Background from "./driver.style";

import { Fa500Px, FaAccusoft } from "react-icons/fa";

import {
  ActionModal,
  CustomTable,
  CustomSearchInput,
  Navbar,
} from "@/components";
import { Box, Grid, Link, Typography } from "@mui/material";
import { CustomButton } from "@/components/customButton/CustomButton";

export default function Home() {
  const { tableHead, tableData, actionModalData } = useDriverController();

  return (
    <Background>
      <Navbar />
      <Box className="container">
        <Box className="subtitleContainer">
          <Typography variant="h5" fontWeight={500} color="#050816">
            Condutores
          </Typography>
          <Typography variant="body1" color="#050816">
            Você está na página de detalhes dos condutores.
          </Typography>
        </Box>

        <Box className="searchContainer">
          <CustomSearchInput id="area-search" handleSearch={() => {}} />
          <CustomButton onClick={() => {}} text="Cadastrar Condutor" />
        </Box>
        <Box>
          <CustomTable
            containId
            tableHead={tableHead}
            tableData={tableData}
            rowsId={[]}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            noFilesFoundText="Não há registro de condutores no momento."
            handleSetItemId={function (ids: string): void {
              throw new Error("Function not implemented.");
            }}
            ActionModal={
              <ActionModal
                ActionModalData={actionModalData}
                ButtonsIcon={[
                  <Fa500Px key="edit driver" className="actionIcon" />,
                  <FaAccusoft key="delete driver" className="actionIcon" />,
                ]}
              />
            }
          />
        </Box>
      </Box>
    </Background>
  );
}
