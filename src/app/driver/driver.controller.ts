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

  useEffect(() => {
    getAllDriversRequest();
  }, [isOpenDriverModal]);

  return {
    tableHead,
    allDriversData,
    actionModalData,
    isOpenDriverModal,
    isEdit,
    handleModalOpen,
    isOpenInfoModal,
    isSuccessfully,
    text,
    handleOpenRegisterModal,
    handleDrawerOpen,
    handleSetDriverId,
  };
};
