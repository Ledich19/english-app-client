"use client";
import { grammar } from "@/app/data/grammar";
import { IArticleTable, ISchema } from "@/interfaces/article";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
  useTheme,
} from "@mui/material";
import * as React from "react";

interface IProps {
  table: IArticleTable;
}

const ArticleTable = ({ table }: IProps) => {
  const theme = useTheme();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      borderRight: `1px solid ${theme.palette.common.white}`,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      borderRight: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: "8px 16px",
    },
    "&:last-child": {
      borderRight: "none", // убрать границу справа для всех ячеек последнего ряда
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <>
      <Typography variant="h4">{table.title}</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              {table.columnNames.map((item) => (
                <StyledTableCell key={item} align="center">
                  {item}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {table.rows.map((row) => (
              <StyledTableRow
                key={row.toString()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.map((item, i) => {
                  return Array.isArray(item) ? (
                    <StyledTableCell
                      style={{ padding: 0 }}
                      key={i}
                      align="center"
                    >
                      <span
                        style={{
                          display: "inline-block",
                          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                        }}
                      >
                        {item[0]}
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                          borderLeft: `1px solid ${theme.palette.divider}`,
                        }}
                      >
                        {item[1]}
                      </span>
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell key={i} align="center">
                      {item}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            ))}
            <StyledTableRow></StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ArticleTable;
