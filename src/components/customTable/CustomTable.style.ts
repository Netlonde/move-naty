import styled, { css } from "styled-components";
import { TableCell, TableRow, tableCellClasses } from "@mui/material";

const Container = styled.div`
  border: 1px solid #e0e7ed;
  border-radius: 16px;
  min-height: 600px;
  max-height: 680px;
  overflow-y: auto;
  position: relative;

  .tableRow {
    transition: all ease-in-out 100ms;
    height: 20px;
  }

  .tableRow:hover {
    background: #f4f4ff;
  }

  .optionsContainer {
    position: relative;
    background-color: transparent;
    display: block;
  }

  th {
    text-align: left !important;
    border-radius: 0px !important;
    z-index: 1;
  }

  td {
    color: #2c2c2c;
    border-radius: 0px !important;
  }

  .firstItem {
    color: #6d6d6d;
  }

  .isClickLine {
    cursor: pointer;
  }

  .headerColumn {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sortIcons {
    display: flex;
    flex-direction: column;
  }

  .iconButton {
    padding: 1px;

    svg {
      width: 11px;
      height: 11px;
    }
  }

  .tableCellRow {
    text-transform: none;
  }
`;

export default Container;

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F9F9F9",
    color: "#000",
    borderRadius: "16px 16px 0 0",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "none",
    borderRadius: "20px",
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fff",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const CustomIconButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const ButtonColor = styled.div`
  border: none;
  padding: 8px;
  border-radius: 5px;
`;
