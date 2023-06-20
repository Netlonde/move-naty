import {
  useActionModalStore,
  useVehiclesStore,
  useInfoModalStore,
  useDeleteModalStore,
} from "@/store";
import { useEffect, useState } from "react";

export const useVehicleController = () => {
  const {
    getAllVehiclesRequest,
    handleSetVehicleId,
    allVehiclesData,
    isOpenVehicleModal,
    deleteVehicleRequest,
    handleSetIsOpenVehicleModal,
    vehiclesId,
    vehicleId,
    handleSearchVehicleData,
  } = useVehiclesStore();
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
  const [tableData, setTableData] = useState(allVehiclesData);
  const [tableId, setTableId] = useState<string[]>(vehiclesId);

  const tableHead = [
    "id",
    "Placa",
    "Marca/Modelo",
    "Ano de Fabricação",
    "Km Atual",
    "Ações",
  ];

  function handleOpenRegisterModal() {
    handleSetIsOpenVehicleModal(true);
  }

  const actionModalData = [
    {
      ButtonsText: "Editar veículo",
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
      await deleteVehicleRequest(id);
      handleSetIsSuccessfully(true);
      handleSetText("Veículo excluído com sucesso!");
      handleModalOpen();
      cleanDataAndId();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText(
        error.length > 0 ? error : "Não foi possível excluir o veículo!"
      );
      handleModalOpen();
    }
  }

  function handleSearch(value: string) {
    const { formatedVehicleData, formatedRowsId } =
      handleSearchVehicleData(value);

    setTableData(formatedVehicleData);
    setTableId(formatedRowsId);
  }

  useEffect(() => {
    getAllVehiclesRequest();
  }, [isOpenVehicleModal, isOpenInfoModal]);

  useEffect(() => {
    setTableData(allVehiclesData);
    setTableId(vehiclesId);
  }, [allVehiclesData.length, isOpenInfoModal]);

  return {
    tableHead,
    allVehiclesData,
    actionModalData,
    isOpenVehicleModal,
    isEdit,
    vehiclesId,
    vehicleId,
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
    handleSearchVehicleData,
    handleOpenRegisterModal,
    handleDrawerOpen,
    handleSetVehicleId,
    setIsEdit,
    handleSearch,
  };
};
