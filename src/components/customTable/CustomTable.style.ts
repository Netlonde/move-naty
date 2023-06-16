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

interface IProps {
  primaryColor: string;
  column: string;
  typeCell: string;
  page: string;
}

export const ButtonColor = styled.div<IProps>`
  ${({ primaryColor }) =>
    css`
      border: none;
      background-color: ${primaryColor === "Disponível" && "#d4ffd3"};
      color: ${primaryColor === "Disponível" && "#00740C"};
      background-color: ${primaryColor === "Não Disponível" && "#FFC5C5"};
      color: ${primaryColor === "Não Disponível" && "#CD3D14"};
      background-color: ${primaryColor === "AUTORIZADO" && "#D4FFD3"};
      color: ${primaryColor === "AUTORIZADO" && "#00740C"};
      background-color: ${primaryColor === "REVOGADO" && "#FFC5C5"};
      color: ${primaryColor === "REVOGADO" && "#CF0606"};
      background-color: ${primaryColor === "PENDENTE" && "#D3FFFC"};
      color: ${primaryColor === "PENDENTE" && "#006D74"};
      background-color: ${primaryColor === "EXPIRADO" && "#FFF6A7"};
      color: ${primaryColor === "EXPIRADO" && "#C96000"};
      background-color: ${primaryColor === "CANCELADO" && "#D9D9D9"};
      color: ${primaryColor === "CANCELADO" && "#414141"};
      background-color: ${primaryColor === "Aguardando retirada" && "#FFF6A7"};
      color: ${primaryColor === "Aguardando retirada" && "#C96000"};
      background-color: ${primaryColor === "Confirmado pelo morador" &&
      "#D3FFFC"};
      color: ${primaryColor === "Confirmado pelo morador" && "#006D74"};
      background-color: ${primaryColor === "Retirada pelo morador" &&
      "#d4ffd3"};
      color: ${primaryColor === "Retirada pelo morador" && "#00740C"};
      background-color: ${primaryColor === "Não Iniciada" && "#FFF6A7"};
      color: ${primaryColor === "Não Iniciada" && "#C96000"};
      background-color: ${primaryColor === "Encerrada" && "#D3FFFC"};
      color: ${primaryColor === "Encerrada" && "#006D74"};
      background-color: ${primaryColor === "Aberta" && "#d4ffd3"};
      color: ${primaryColor === "Aberta" && "#00740C"};
      background-color: ${primaryColor === "DISPONÍVEL" && "#d4ffd3"};
      color: ${primaryColor === "DISPONÍVEL" && "#00740C"};
      background-color: ${primaryColor === "NÃO DISPONÍVEL" && "#FFC5C5"};
      color: ${primaryColor === "NÃO DISPONÍVEL" && "#CF0606"};
      padding: 8px;
      border-radius: 5px;

      // reserves page
      background-color: ${primaryColor === "Autorizado" && "#D4FFD3"};
      color: ${primaryColor === "Autorizado" && "#00740C"};
      background-color: ${primaryColor === "Revogado" && "#FFC5C5"};
      color: ${primaryColor === "Revogado" && "#CF0606"};
      background-color: ${primaryColor === "Cancelado" && "#D9D9D9"};
      color: ${primaryColor === "Cancelado" && "#414141"};
      background-color: ${primaryColor === "Expirado" && "#FFF6A7"};
      color: ${primaryColor === "Expirado" && "#C96000"};
      background-color: ${primaryColor === "Pendente" && "#D3FFFC"};
      color: ${primaryColor === "Pendente" && "#006D74"};

      // lostitem page
      background-color: ${primaryColor === "RETIRADO" && "#D4FFD3"};
      color: ${primaryColor === "RETIRADO" && "#00740C"};
      background-color: ${primaryColor === "REPROVADO" && "#FFC5C5"};
      color: ${primaryColor === "REPROVADO" && "#CF0606"};
      background-color: ${primaryColor === "AGUARDANDO ADMIN" && "#08739D33"};
      color: ${primaryColor === "AGUARDANDO ADMIN" && "#08739D"};
      background-color: ${primaryColor === "AGUARDANDO RETIRADA" && "#FFF6A7"};
      color: ${primaryColor === "AGUARDANDO RETIRADA" && "#C96000"};
      background-color: ${primaryColor === "ENCONTRADO" && "#D3FFFC"};
      color: ${primaryColor === "ENCONTRADO" && "#006D74"};
      background-color: ${primaryColor === "PERDIDO" && "#D3FFFC"};
      color: ${primaryColor === "PERDIDO" && "#006D74"};

      // payments files page
      background-color: ${primaryColor === "Boleto Pago" && "#D4FFD3"};
      color: ${primaryColor === "Boleto Pago" && "#00740C"};
      background-color: ${primaryColor === "Boleto Pendente" && "#FFF6A7"};
      color: ${primaryColor === "Boleto Pendente" && "#C96000"};
    `}

  ${({ column, page }) =>
    column === "statusColumn" &&
    css`
      width: ${page === "orders" ? "250px" : "140px"};
      text-align: center;
    `}

  ${({ column, primaryColor, page }) =>
    column === "visitorType" &&
    css`
      background-color: ${primaryColor !== "Amigo" && "transparent"};
      background-color: ${primaryColor === "Amigo" && "#D3FFFC"};
      color: ${primaryColor === "Amigo" && "#006D74"};
      background-color: ${primaryColor === "Família" && "#D3FFFC"};
      color: ${primaryColor === "Família" && "#006D74"};
      background-color: ${primaryColor === "Prestador de Serviço" && "#D3FFFC"};
      color: ${primaryColor === "Prestador de Serviço" && "#006D74"};
      background-color: ${primaryColor === "Outro" && "#D3FFFC"};
      color: ${primaryColor === "Outro" && "#006D74"};
      width: 100%;
    `}

  ${({ typeCell, page }) =>
    page === "visitors" &&
    css`
      text-align: ${typeCell === "typeCell" && "center"};
    `}

  ${({ page, primaryColor }) =>
    page === "area" &&
    (primaryColor === "Disponível" ||
      primaryColor === "Não Disponível" ||
      primaryColor === "DISPONÍVEL" ||
      primaryColor === "NÃO DISPONÍVEL") &&
    css`
      background-color: ${primaryColor === "DISPONÍVEL" && "#d4ffd3"};
      color: ${primaryColor === "DISPONÍVEL" && "#00740C"};
      background-color: ${primaryColor === "NÃO DISPONÍVEL" && "#FFC5C5"};
      color: ${primaryColor === "NÃO DISPONÍVEL" && "#CF0606"};
      text-align: center;
      text-transform: uppercase;
    `}

    ${({ page, primaryColor }) =>
    page === "maintenance" &&
    css`
      background-color: ${primaryColor === "EM ANDAMENTO" && "#D3FFFC"};
      color: ${primaryColor === "EM ANDAMENTO" && "#006D74"};
      background-color: ${primaryColor === "PENDENTE" && "#FFF6A7"};
      color: ${primaryColor === "PENDENTE" && "#C96000"};
      background-color: ${primaryColor === "CONCLUÍDO" && "#D4FFD3"};
      color: ${primaryColor === "CONCLUÍDO" && "#00740C"};
      background-color: ${primaryColor === "ATRASADO" && "#FFC5C5"};
      color: ${primaryColor === "ATRASADO" && "#CF0606"};
    `}
`;
