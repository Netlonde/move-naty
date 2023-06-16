"use client";

import { useDriverController } from "./driver.controller";
import Background from "./driver.style";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import {
  ActionModal,
  CustomTable,
  CustomSearchInput,
  Navbar,
} from "@/components";
import { Box, Grid, Link, Typography } from "@mui/material";
import { CustomButton } from "@/components/customButton/CustomButton";
import { RegisterModal } from "./registerModal/RegisterModal";
import { InfoModal } from "@/components/InfoModal/InfoModal";

export default function Home() {
  const {
    tableHead,
    allDriversData,
    actionModalData,
    isEdit,
    isOpenDriverModal,
    handleOpenRegisterModal,
    handleDrawerOpen,
    handleModalOpen,
    isOpenInfoModal,
    isSuccessfully,
    text,
    handleSetDriverId,
  } = useDriverController();

  return (
    <Background>
      {allDriversData.length > 0 && (
        <>
          <Navbar />
          <Box className="container">
            <Box className="subtitleContainer">
              <Typography variant="h5" fontWeight={500} color="#050816">
                Condutores
              </Typography>
              <Typography variant="body1" color="#050816" sx={{ opacity: 0.6 }}>
                Você está na página de detalhes dos condutores.
              </Typography>
            </Box>

            <Box className="searchContainer">
              <CustomSearchInput id="area-search" handleSearch={() => {}} />
              <CustomButton
                onClick={handleOpenRegisterModal}
                text="Cadastrar Condutor"
              />
            </Box>
            <Box>
              <CustomTable
                tableHead={tableHead}
                tableData={allDriversData}
                rowsId={[]}
                onClick={handleDrawerOpen}
                noFilesFoundText="Não há registro de condutores no momento."
                handleSetItemId={handleSetDriverId}
                ActionModal={
                  <ActionModal
                    ActionModalData={actionModalData}
                    ButtonsIcon={[
                      <AiOutlineEdit
                        key="edit driver"
                        className="actionIcon"
                      />,
                      <AiOutlineDelete
                        key="delete driver"
                        className="actionIcon"
                      />,
                    ]}
                  />
                }
              />
            </Box>
          </Box>
          <RegisterModal
            title={isEdit ? "Editar Condutor" : "Cadastrar Condutor"}
            isModalOpen={isOpenDriverModal}
            variant={isEdit ? "Edit" : "register"}
          />
        </>
      )}
      {isOpenInfoModal && (
        <InfoModal
          isSuccessfully={isSuccessfully}
          onClick={handleModalOpen}
          text={text}
        />
      )}
    </Background>
  );
}
