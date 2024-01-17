import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  StyledTableCell,
  StyledTableRow,
  StyledTableSortLabel,
} from "./IrregularTable.styles";
import { Tooltip, Typography } from "@mui/material";

interface IProps {
  verbs: IIrregularVerbs[];
}
type Order = "asc" | "desc";

const IrregularTable = ({ verbs }: IProps) => {
  const [sortOrder, setSortOrder] = React.useState<Order>("asc");
  
  const rows = verbs.sort((a, b) => {
    return sortOrder === "asc"
      ? a.infinitive.word.localeCompare(b.infinitive.word)
      : b.infinitive.word.localeCompare(a.infinitive.word);
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              V1
              <StyledTableSortLabel
                active
                direction={sortOrder}
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
              ></StyledTableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="center">V2</StyledTableCell>
            <StyledTableCell align="center">V3</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.infinitive.word}>

              <StyledTableCell
                align="left"
                style={{
                  width: "33.33%",
                  backgroundColor: "#fff3dd", // Цвет фона для первой колонки
                }}
              >
                <Tooltip title={row.translations.ru}>
                  <span>{row.infinitive.word}</span>
                </Tooltip>
              </StyledTableCell>

              <StyledTableCell
                align="left"
                style={{
                  width: "33.33%",
                  backgroundColor: "#d9e7f7", // Цвет фона для первой колонки
                }}
              >
                <Tooltip title={row.translations.ru}>
                  <span>{row.pastSimple.word}</span>
                </Tooltip>
              </StyledTableCell>

              <StyledTableCell
                align="left"
                style={{
                  width: "33.33%",
                  backgroundColor: "#fbdede", // Цвет фона для первой колонки
                }}
              >
                <Tooltip title={row.translations.ru}>
                  <span>{row.pastParticiple.word}</span>
                </Tooltip>
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IrregularTable;
