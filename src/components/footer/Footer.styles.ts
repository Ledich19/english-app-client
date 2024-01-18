"use client";
import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  //marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText, 
  
}));


