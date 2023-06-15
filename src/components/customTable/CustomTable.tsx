/* eslint-disable react/no-array-index-key */
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  Button,
  Box,
} from "@mui/material";
import { FaEllipsisV } from "react-icons/fa";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

import CustomTableProps from "./CustomTable.props";
import { useCustomTable } from "./CustomTable.controller";
import { getLengthObj } from "@/helpers";
import NoFilesFound from "./components/NoFilesFound/NoFilesFound";

import Container, {
  StyledTableCell,
  StyledTableRow,
  ButtonColor,
} from "./CustomTable.style";

export function CustomTable(props: CustomTableProps) {
  const {
    tableHead,
    tableData,
    ActionModal,
    rowsId,
    containId,
    noFilesFoundText,
    onClick,
    handleSetItemId,
    renderAction,
  } = props;
  const {
    isOpenActionModal,
    indexOfRow,
    handleClickOnActionBtn,
    closeActionModalOnClickAway,
    formatedTableData,
    formateRowsId,
  } = useCustomTable(tableData, rowsId);

  return (
    <OutsideClickHandler onOutsideClick={closeActionModalOnClickAway}>
      <Container onClick={closeActionModalOnClickAway}>
        <Table
          stickyHeader
          sx={{ minWidth: 860 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              {tableHead.map((head, index) => (
                <StyledTableCell key={head}>
                  <Box className="headerColumn">
                    <p>{head}</p>
                    <Box
                      display={head === "Ações" ? "none !important" : "flex"}
                      className="sortIcons"
                    ></Box>
                  </Box>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          {tableData[0] && (
            <TableBody>
              {formatedTableData.map((data, index) => (
                <StyledTableRow
                  key={JSON.stringify(data)}
                  className={`tableRow`}
                >
                  {Object.values(data).map((value: string, indexValue) => (
                    <React.Fragment key={indexValue}>
                      {!containId && (
                        <StyledTableCell
                          id={formateRowsId[index]}
                          className="tableCellRow"
                        >
                          <ButtonColor
                            id={formateRowsId[index]}
                            column={
                              data.status === value
                                ? "statusColumn"
                                : "visitorType"
                            }
                            typeCell={
                              data.visitType === value
                                ? "typeCell"
                                : "visitorType"
                            }
                            primaryColor={value}
                            page={"teste"}
                          >
                            {value}
                          </ButtonColor>
                        </StyledTableCell>
                      )}

                      {containId && indexValue !== 0 && (
                        <StyledTableCell
                          id={formateRowsId[index]}
                          className={
                            indexValue === 1 ? "firstItem tableCellRow" : ""
                          }
                        >
                          <ButtonColor
                            id={formateRowsId[index]}
                            primaryColor={value}
                            column={
                              data.status === value
                                ? "statusColumn"
                                : "visitorType"
                            }
                            typeCell={
                              data.visitType === value
                                ? "typeCell"
                                : "visitorType"
                            }
                            page={"teste"}
                          >
                            {value}
                          </ButtonColor>
                        </StyledTableCell>
                      )}

                      {indexValue === getLengthObj(data) - 1 && (
                        <StyledTableCell
                          id={formateRowsId[index]}
                          className="optionsContainer tableCellRow"
                        >
                          <Button
                            id={formateRowsId[index]}
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                              handleClickOnActionBtn(
                                e,
                                onClick,
                                index,
                                handleSetItemId
                              )
                            }
                          >
                            <FaEllipsisV
                              id={formateRowsId[index]}
                              style={{ color: "#6d6d6d" }}
                            />
                          </Button>
                          {isOpenActionModal &&
                            index === indexOfRow &&
                            ActionModal}
                          {isOpenActionModal &&
                            renderAction &&
                            index === indexOfRow &&
                            renderAction(formatedTableData[index])}
                        </StyledTableCell>
                      )}
                    </React.Fragment>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          )}
        </Table>

        {!formatedTableData[0] && <NoFilesFound text={noFilesFoundText} />}
      </Container>
    </OutsideClickHandler>
  );
}
