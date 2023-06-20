import {
  useActionModalStore,
  useDisplacementsStore,
  useInfoModalStore,
  useDeleteModalStore,
} from "@/store";
import { useEffect, useState } from "react";

export const useDisplacementController = () => {
  const {
    getAllDisplacementsRequest,
    handleSetDisplacementId,
    allDisplacementsData,
    isOpenDisplacementModal,
    deleteDisplacementRequest,
    handleSetIsOpenDisplacementModal,
    displacementsId,
    displacementId,
    handleSearchDisplacementData,
  } = useDisplacementsStore();
  const { handleDrawerOpen } = useActionModalStore();

  const {
    handleModalOpen,
    isOpenInfoModal,
    isSuccessfully,
    text,
    handleSetIsSuccessfully,
    handleSetText,
  } = useInfoModalStore();

  const { handleDeleteModalOpen, isOpenDeleteModal } = useDeleteModalStore();

  const [isEdit, setIsEdit] = useState(false);
  const [tableData, setTableData] = useState(allDisplacementsData);
  const [tableId, setTableId] = useState<string[]>(displacementsId);

  const tableHead = [
    "Id",
    "Motivo",
    "CheckList",
    "Observacao",
    "Id do Cliente",
    "Id do Condutor",
    "Id do Veículo",
    "Início do Deslocamento",
    "Fim do Deslocamento",
    "Km Inicial",
    "Km Final",
    "Ações",
  ];

  function handleOpenRegisterModal() {
    handleSetIsOpenDisplacementModal(true);
  }

  const actionModalData = [
    {
      ButtonsText: "Encerrar Deslocamento",
      OnClick: () => {
        setIsEdit(true);
        handleOpenRegisterModal();
      },
    },
    {
      ButtonsText: "Excluir",
      OnClick: () => {
        handleDeleteModalOpen();
      },
    },
  ];

  function cleanDataAndId() {
    handleSearch("");
  }

  async function onSubmitDelete(id: string) {
    try {
      await deleteDisplacementRequest(id);
      handleSetIsSuccessfully(true);
      handleSetText("Deslocamento excluído com sucesso!");
      handleModalOpen();
      cleanDataAndId();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText(
        error.length > 0 ? error : "Não foi possível excluir o cliente!"
      );
      handleModalOpen();
    }
  }

  function handleSearch(value: string) {
    const { formatedDisplacementData, formatedRowsId } =
      handleSearchDisplacementData(value);

    setTableData(formatedDisplacementData);
    setTableId(formatedRowsId);
  }

  useEffect(() => {
    getAllDisplacementsRequest();
  }, [isOpenDisplacementModal, isOpenInfoModal]);

  useEffect(() => {
    setTableData(allDisplacementsData);
    setTableId(displacementsId);
  }, [allDisplacementsData.length, isOpenInfoModal]);

  return {
    tableHead,
    allDisplacementsData,
    actionModalData,
    isOpenDisplacementModal,
    isEdit,
    displacementsId,
    displacementId,
    handleModalOpen,
    isOpenInfoModal,
    isSuccessfully,
    handleDeleteModalOpen,
    isOpenDeleteModal,
    text,
    tableData,
    cleanDataAndId,
    tableId,
    onSubmitDelete,
    handleSearchDisplacementData,
    handleOpenRegisterModal,
    handleDrawerOpen,
    handleSetDisplacementId,
    setIsEdit,
    handleSearch,
  };
};
