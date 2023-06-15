interface CustomTableProps {
  tableHead: string[];
  tableData: any;
  containId?: boolean;
  rowsId: string[];
  onClick: () => void;
  ActionModal?: JSX.Element;
  noFilesFoundText: string;
  handleSetItemId: (ids: string) => void;
  renderAction?: (row: { status: string }) => JSX.Element;
}

export default CustomTableProps;
