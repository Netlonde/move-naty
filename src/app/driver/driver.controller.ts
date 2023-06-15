import { useDriversStore } from "@/store/drivers/drivers.store";
import { useEffect } from "react";

export const useDriverController = () => {
  const { getAllDriversRequest, allDriversData } = useDriversStore();

  const tableHead = [
    "id",
    "nome",
    "Número da Habilitação",
    "Categoria da Habilitação",
    "Vencimento da Habilitação",
    "Ações",
  ];

  const tableData = [
    {
      name: "carlos",
      licenseNumber: "1234",
      licenseCategory: "A",
      licenseExpiration: "25/12/2026",
    },
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

  return { tableHead, allDriversData, actionModalData };
};
