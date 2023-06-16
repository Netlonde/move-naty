import { useEffect, useState } from "react";
import { useActionModalStore } from "@/store";

export function useCustomTable(
  tableData: Array<{ status: string; visitType?: string }>,
  rowsId: string[]
) {
  const { isOpenActionModal, handleIsLastItemOfTable, handleDrawerOpen } =
    useActionModalStore();

  const [indexOfRow, setIndexOfRow] = useState(-1);
  const [formatedTableData, setFormatedTableData] = useState(tableData);
  const [formateRowsId, setFormateRowsId] = useState(rowsId);

  function handleClickOnActionBtn(
    e: React.MouseEvent<HTMLElement>,
    func: () => void,
    index: number,
    handleSetItemId: (id: string) => void
  ) {
    index === 9
      ? handleIsLastItemOfTable(true)
      : handleIsLastItemOfTable(false);

    const componentSelected = e.target as HTMLElement;
    console.log(componentSelected.parentElement?.id);

    if (!componentSelected.id) {
      handleSetItemId(componentSelected.parentElement?.id || "");
      setIndexOfRow(index);
      func();
      return;
    }
    handleSetItemId(componentSelected.id);
    setIndexOfRow(index);
    func();
  }

  function closeActionModalOnClickAway() {
    if (isOpenActionModal) handleDrawerOpen();
  }

  useEffect(() => {
    setFormateRowsId(rowsId);
    setFormatedTableData(tableData);
  }, [tableData, rowsId]);

  return {
    isOpenActionModal,
    indexOfRow,
    handleClickOnActionBtn,
    closeActionModalOnClickAway,
    formatedTableData,
    formateRowsId,
  };
}
