import {
  useActionModalStore,
  useDriversStore,
  useInfoModalStore,
  useDeleteModalStore,
  useLoadingModalStore,
} from "@/store";
import { useEffect, useState } from "react";

export const useDriverController = () => {
  const {
    getAllDriversRequest,
    handleSetDriverId,
    allDriversData,
    isOpenDriverModal,
    deleteDriverRequest,
    handleSetIsOpenDriverModal,
    driversId,
    driverId,
    handleSearchDriverData,
  } = useDriversStore();
  const { handleDrawerOpen } = useActionModalStore();
  const {
    handleModalOpen,
    isOpenInfoModal,
    isSuccessfully,
    text,
    handleSetIsSuccessfully,
    handleSetText,
  } = useInfoModalStore();

  const { isLoading, handleSetIsLoading } = useLoadingModalStore();
  const { handleDeleteModalOpen, isOpenDeleteModal } = useDeleteModalStore();

  const [isEdit, setIsEdit] = useState(false);
  const [tableData, setTableData] = useState(allDriversData);
  const [tableId, setTableId] = useState<string[]>(driversId);

  const tableHead = [
    "id",
    "nome",
    "Número da Habilitação",
    "Categoria da Habilitação",
    "Vencimento da Habilitação",
    "Ações",
  ];

  function handleOpenRegisterModal() {
    handleSetIsOpenDriverModal(true);
  }

  const actionModalData = [
    {
      ButtonsText: "Editar condutor",
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
    handleSetIsLoading(true);
    try {
      await deleteDriverRequest(id);
      handleSetIsSuccessfully(true);
      handleSetText("Condutor excluído com sucesso!");
      handleModalOpen();
      cleanDataAndId();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText(
        error.length > 0
          ? error.message
          : "Não foi possível excluir o condutor!"
      );
      handleModalOpen();
    } finally {
      handleSetIsLoading(false);
    }
  }

  function handleSearch(value: string) {
    const { formatedDriverData, formatedRowsId } =
      handleSearchDriverData(value);

    setTableData(formatedDriverData);
    setTableId(formatedRowsId);
  }

  useEffect(() => {
    getAllDriversRequest();
  }, [isOpenDriverModal, isOpenInfoModal]);

  useEffect(() => {
    setTableData(allDriversData);
    setTableId(driversId);
  }, [allDriversData.length, isOpenInfoModal]);

  return {
    tableHead,
    allDriversData,
    actionModalData,
    isOpenDriverModal,
    isEdit,
    driversId,
    driverId,
    handleModalOpen,
    isOpenInfoModal,
    isSuccessfully,
    handleDeleteModalOpen,
    isOpenDeleteModal,
    text,
    tableData,
    cleanDataAndId,
    isLoading,
    tableId,
    onSubmitDelete,
    handleSearchDriverData,
    handleOpenRegisterModal,
    handleDrawerOpen,
    handleSetDriverId,
    setIsEdit,
    handleSearch,
  };
};
