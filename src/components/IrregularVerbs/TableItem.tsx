"use client";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  StyledTableCell,
  StyledTableRow,
  StyledTableSortLabel,
} from "./IrregularTable.styles";
import CustomTableCell from "./CustomTableCell";

interface IProps {
  data: IIrregularVerbs[];
  isTranscription: boolean;
  title?: string;
}
type Order = "asc" | "desc";

const TableItem = ({ data, isTranscription, title }: IProps) => {
  const [sortOrder, setSortOrder] = useState<Order>("asc");

  const rows = data.sort((a, b) => {
    return sortOrder === "asc"
      ? a.infinitive.word.localeCompare(b.infinitive.word)
      : b.infinitive.word.localeCompare(a.infinitive.word);
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          {title && (
            <StyledTableCell align="center" colSpan={3}>
              {title}
            </StyledTableCell>
          )}
        </TableRow>
        <TableRow>
          <StyledTableCell align="center">
            V1
            <StyledTableSortLabel
              active
              direction={sortOrder}
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            ></StyledTableSortLabel>
          </StyledTableCell>
          <StyledTableCell align="center">V2</StyledTableCell>
          <StyledTableCell align="center">V3</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.infinitive.word}>
            <CustomTableCell
              isTranscription={isTranscription}
              word={row.infinitive}
              translation={row.translations.ru}
              color="#fff3dd"
            />
            <CustomTableCell
              isTranscription={isTranscription}
              word={row.pastSimple}
              translation={row.translations.ru}
              color="#d9e7f7"
            />
            <CustomTableCell
              isTranscription={isTranscription}
              word={row.pastParticiple}
              translation={row.translations.ru}
              color="#fbdede"
            />
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableItem;
