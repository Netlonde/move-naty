import {
  useActionModalStore,
  useClientsStore,
  useInfoModalStore,
  useDeleteModalStore,
  useLoadingModalStore,
} from "@/store";
import { useEffect, useState } from "react";

export const useClientController = () => {
  const {
    getAllClientsRequest,
    handleSetClientId,
    allClientsData,
    isOpenClientModal,
    deleteClientRequest,
    handleSetIsOpenClientModal,
    clientsId,
    clientId,
    handleSearchClientData,
  } = useClientsStore();
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

  const { isLoading, handleSetIsLoading } = useLoadingModalStore();

  const [isEdit, setIsEdit] = useState(false);
  const [tableData, setTableData] = useState(allClientsData);
  const [tableId, setTableId] = useState<string[]>(clientsId);

  const tableHead = [
    "id",
    "Nome",
    "Número do Documento",
    "Tipo do Documento",
    "Logradouro",
    "Número",
    "Bairro",
    "Cidade",
    "UF",
    "Ações",
  ];

  function handleOpenRegisterModal() {
    handleSetIsOpenClientModal(true);
  }

  const actionModalData = [
    {
      ButtonsText: "Editar cliente",
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
      await deleteClientRequest(id);
      handleSetIsSuccessfully(true);
      handleSetText("Cliente excluído com sucesso!");
      handleModalOpen();
      cleanDataAndId();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText(
        error.message.length > 0
          ? error.message
          : "Não foi possível excluir o cliente!"
      );
      handleModalOpen();
    } finally {
      handleSetIsLoading(false);
    }
  }

  function handleSearch(value: string) {
    const { formatedClientData, formatedRowsId } =
      handleSearchClientData(value);

    setTableData(formatedClientData);
    setTableId(formatedRowsId);
  }

  useEffect(() => {
    getAllClientsRequest();
  }, [isOpenClientModal, isOpenInfoModal]);

  useEffect(() => {
    setTableData(allClientsData);
    setTableId(clientsId);
  }, [allClientsData.length, isOpenInfoModal]);

  return {
    tableHead,
    allClientsData,
    actionModalData,
    isOpenClientModal,
    isEdit,
    clientsId,
    clientId,
    handleModalOpen,
    isOpenInfoModal,
    isSuccessfully,
    handleDeleteModalOpen,
    isOpenDeleteModal,
    text,
    isLoading,
    tableData,
    cleanDataAndId,
    tableId,
    onSubmitDelete,
    handleSearchClientData,
    handleOpenRegisterModal,
    handleDrawerOpen,
    handleSetClientId,
    setIsEdit,
    handleSearch,
  };
};
