import { TableSortLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#232323",
    color: theme.palette.common.white,
    padding: theme.spacing(1)
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: "bold",
    padding: theme.spacing(1)
  },
  borderBottom: "1px solid #998585",
  span: {
    cursor: "pointer",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const StyledTableSortLabel = styled(TableSortLabel)(({ theme }) => ({
  "&.MuiTableSortLabel-root": {
    color: theme.palette.common.white,
    "& .MuiTableSortLabel-icon": {
      color: `${theme.palette.common.white}`,
    },
  },
  "&.MuiTableSortLabel-active": {
    color: theme.palette.common.white, 
  },

}));