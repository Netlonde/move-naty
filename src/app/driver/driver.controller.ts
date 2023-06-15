import { useActionModalStore, useDriversStore } from "@/store";
import { useEffect, useState } from "react";

export const useDriverController = () => {
  const {
    getAllDriversRequest,
    handleSetDriverId,
    allDriversData,
    isOpenDriverModal,
    handleSetIsOpenDriverModal,
  } = useDriversStore();
  const { handleDrawerOpen } = useActionModalStore();

  const [isEdit, setIsEdit] = useState(false);

  const tableHead = [
    "id",
    "nome",
    "Número da Habilitação",
    "Categoria da Habilitação",
    "Vencimento da Habilitação",
    "Ações",
  ];

  useEffect(() => {
    getAllDriversRequest();
  }, []);

  const actionModalData = [
    {
      ButtonsText: "Editar condutor",
      OnClick: () => {},
    },
    {
      ButtonsText: "Excluir",
      OnClick: () => {},
    },
  ];

  function handleOpenRegisterModal() {
    handleSetIsOpenDriverModal(true);
  }

  return {
    tableHead,
    allDriversData,
    actionModalData,
    isOpenDriverModal,
    isEdit,
    handleOpenRegisterModal,
    handleDrawerOpen,
    handleSetDriverId,
  };
};
