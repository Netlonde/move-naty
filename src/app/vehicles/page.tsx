"use client";

import { useVehicleController } from "./vehicles.controller";
import Background from "./vehicles.style";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import {
  ActionModal,
  CustomTable,
  CustomSearchInput,
  Navbar,
  DeleteModal,
  Loading,
} from "@/components";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "@/components/customButton/CustomButton";
import { RegisterModal } from "./registerModal/RegisterModal";
import { InfoModal } from "@/components/InfoModal/InfoModal";

export default function Vehicle() {
  const {
    tableHead,
    actionModalData,
    isEdit,
    isLoading,
    vehicleId,
    isOpenVehicleModal,
    handleDeleteModalOpen,
    isOpenDeleteModal,
    handleOpenRegisterModal,
    handleDrawerOpen,
    handleModalOpen,
    isOpenInfoModal,
    tableData,
    cleanDataAndId,
    tableId,
    onSubmitDelete,
    setIsEdit,
    handleSearch,
    isSuccessfully,
    text,
    handleSetVehicleId,
  } = useVehicleController();

  return (
    <Background>
      <>
        <Navbar />
        <Box className="container">
          <Box className="subtitleContainer">
            <Typography variant="h5" fontWeight={500} color="#050816">
              Veículos
            </Typography>
            <Typography variant="body1" color="#050816" sx={{ opacity: 0.6 }}>
              Você está na página de detalhes dos veículos.
            </Typography>
          </Box>

          <Box className="searchContainer">
            <CustomSearchInput id="area-search" handleSearch={handleSearch} />
            <CustomButton
              onClick={() => {
                handleOpenRegisterModal();
                setIsEdit(false);
              }}
              text="Cadastrar Veículo"
            />
          </Box>
          <Box>
            <CustomTable
              tableHead={tableHead}
              tableData={tableData}
              rowsId={tableId}
              onClick={() => {
                handleDrawerOpen();
                setIsEdit(true);
              }}
              noFilesFoundText="Não há registro de veículos no momento."
              handleSetItemId={handleSetVehicleId}
              ActionModal={
                <ActionModal
                  ActionModalData={actionModalData}
                  ButtonsIcon={[
                    <AiOutlineEdit key="edit vehicle" className="actionIcon" />,
                    <AiOutlineDelete
                      key="delete vehicle"
                      className="actionIcon"
                    />,
                  ]}
                />
              }
            />
          </Box>
        </Box>
        <RegisterModal
          cleanData={() => cleanDataAndId()}
          title={isEdit ? "Editar Veículo" : "Cadastrar Veículo"}
          isModalOpen={isOpenVehicleModal}
          variant={isEdit ? "edit" : "register"}
        />
      </>

      {isOpenInfoModal && (
        <InfoModal
          isSuccessfully={isSuccessfully}
          onClick={handleModalOpen}
          text={text}
        />
      )}

      {isOpenDeleteModal && (
        <DeleteModal
          title="Tem certeza que quer apagar o veículo?"
          onClickDelete={() => onSubmitDelete(vehicleId)}
          handleModalClose={handleDeleteModalOpen}
        />
      )}

      {isLoading && <Loading />}
    </Background>
  );
}
