export const useDriverController = () => {
  const tableHead = [
    "name",
    "licenseNumber",
    "licenseCategory",
    "licenseExpiration",
  ];

  const tableData = [
    {
      name: "carlos",
      licenseNumber: "1234",
      licenseCategory: "A",
      licenseExpiration: "25/12/2026",
    },
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

  return { tableHead, tableData, actionModalData };
};
