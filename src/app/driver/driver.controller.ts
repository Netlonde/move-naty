import {
  useActionModalStore,
  useDriversStore,
  useInfoModalStore,
} from "@/store";
import { useEffect, useState } from "react";

export const useDriverController = () => {
  const {
    getAllDriversRequest,
    handleSetDriverId,
    allDriversData,
    isOpenDriverModal,
    handleSetIsOpenDriverModal,
    driversId,
  } = useDriversStore();
  const { handleDrawerOpen } = useActionModalStore();
  const { handleModalOpen, isOpenInfoModal, isSuccessfully, text } =
    useInfoModalStore();

  const [isEdit, setIsEdit] = useState(false);

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
      OnClick: () => {},
    },
  ];

  useEffect(() => {
    getAllDriversRequest();
  }, [isOpenDriverModal]);

  return {
    tableHead,
    allDriversData,
    actionModalData,
    isOpenDriverModal,
    isEdit,
    driversId,
    handleModalOpen,
    isOpenInfoModal,
    isSuccessfully,
    text,
    handleOpenRegisterModal,
    handleDrawerOpen,
    handleSetDriverId,
    setIsEdit,
  };
};
