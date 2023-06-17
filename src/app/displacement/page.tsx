"use client";

import { useDisplacementController } from "./displacement.controller";
import Background from "./displacement.style";

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
import Link from "next/link";

export default function Displacement() {
  const {
    tableHead,
    actionModalData,
    isEdit,
    displacementId,
    isOpenDisplacementModal,
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
    handleSetDisplacementId,
  } = useDisplacementController();

  return (
    <Background>
      <>
        <Navbar />
        <Box className="container">
          <Box className="subtitleContainer">
            <Typography variant="h5" fontWeight={500} color="#050816">
              Deslocamentos
            </Typography>
            <Typography variant="body1" color="#050816" sx={{ opacity: 0.6 }}>
              Você está na página de detalhes dos deslocamentos.
            </Typography>
          </Box>

          <Box className="searchContainer">
            <CustomSearchInput id="area-search" handleSearch={handleSearch} />
            <Link href="/home" className="linkToHome">
              Cadastrar Deslocamento
            </Link>
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
              noFilesFoundText="Não há registro de deslocamentos no momento."
              handleSetItemId={handleSetDisplacementId}
              ActionModal={
                <ActionModal
                  ActionModalData={actionModalData}
                  ButtonsIcon={[
                    <AiOutlineEdit
                      key="edit displacement"
                      className="actionIcon"
                    />,
                    <AiOutlineDelete
                      key="delete displacement"
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
          title="Encerrar Deslocamento"
          isModalOpen={isOpenDisplacementModal}
          variant={"edit"}
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
          title="Tem certeza que quer apagar o deslocamento?"
          onClickDelete={() => onSubmitDelete(displacementId)}
          handleModalClose={handleDeleteModalOpen}
        />
      )}
    </Background>
  );
}
