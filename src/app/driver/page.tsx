"use client";

import { useDriverController } from "./driver.controller";
import Background from "./driver.style";

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

export default function Home() {
  const {
    tableHead,
    actionModalData,
    isEdit,
    isLoading,
    driverId,
    isOpenDriverModal,
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
    handleSetDriverId,
  } = useDriverController();

  return (
    <Background>
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
            <CustomSearchInput id="area-search" handleSearch={handleSearch} />
            <CustomButton
              onClick={() => {
                handleOpenRegisterModal();
                setIsEdit(false);
              }}
              text="Cadastrar Condutor"
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
              noFilesFoundText="Não há registro de condutores no momento."
              handleSetItemId={handleSetDriverId}
              ActionModal={
                <ActionModal
                  ActionModalData={actionModalData}
                  ButtonsIcon={[
                    <AiOutlineEdit key="edit driver" className="actionIcon" />,
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
          cleanData={() => cleanDataAndId()}
          title={isEdit ? "Editar Condutor" : "Cadastrar Condutor"}
          isModalOpen={isOpenDriverModal}
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
          title="Tem certeza que quer apagar o condutor?"
          onClickDelete={() => onSubmitDelete(driverId)}
          handleModalClose={handleDeleteModalOpen}
        />
      )}

      {isLoading && <Loading />}
    </Background>
  );
}
