import {  Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { StyledAppBar } from "./Footer.styles";




const Footer = () => {

  return (
    <StyledAppBar position="static">
    <Toolbar>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Ваше название. Все права защищены.
      </Typography>
    </Toolbar>
  </StyledAppBar>
  );
};
export default Footer;
