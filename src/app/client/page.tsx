"use client";

import { useClientController } from "./client.controller";
import Background from "./client.style";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import {
  ActionModal,
  CustomTable,
  CustomSearchInput,
  Navbar,
  DeleteModal,
} from "@/components";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "@/components/customButton/CustomButton";
import { RegisterModal } from "./registerModal/RegisterModal";
import { InfoModal } from "@/components/InfoModal/InfoModal";

export default function Client() {
  const {
    tableHead,
    actionModalData,
    isEdit,
    clientId,
    isOpenClientModal,
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
    handleSetClientId,
  } = useClientController();

  return (
    <Background>
      <>
        <Navbar />
        <Box className="container">
          <Box className="subtitleContainer">
            <Typography variant="h5" fontWeight={500} color="#050816">
              Clientes
            </Typography>
            <Typography variant="body1" color="#050816" sx={{ opacity: 0.6 }}>
              Você está na página de detalhes dos clientes.
            </Typography>
          </Box>

          <Box className="searchContainer">
            <CustomSearchInput id="area-search" handleSearch={handleSearch} />
            <CustomButton
              onClick={() => {
                handleOpenRegisterModal();
                setIsEdit(false);
              }}
              text="Cadastrar Cliente"
            />
          </Box>
          <Box>
            <CustomTable
              tableHead={tableHead}
              tableData={tableData}
              rowsId={tableId.map((id) => String(id))}
              onClick={() => {
                handleDrawerOpen();
                setIsEdit(true);
              }}
              noFilesFoundText="Não há registro de clientes no momento."
              handleSetItemId={handleSetClientId}
              ActionModal={
                <ActionModal
                  ActionModalData={actionModalData}
                  ButtonsIcon={[
                    <AiOutlineEdit key="edit client" className="actionIcon" />,
                    <AiOutlineDelete
                      key="delete client"
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
          title={isEdit ? "Editar Cliente" : "Cadastrar Cliente"}
          isModalOpen={isOpenClientModal}
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
          title="Tem certeza que quer apagar o cliente?"
          onClickDelete={() => onSubmitDelete(clientId)}
          handleModalClose={handleDeleteModalOpen}
        />
      )}
    </Background>
  );
}
