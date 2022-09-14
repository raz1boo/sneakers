import { Box, Toolbar } from "@mui/material";
import Logo from "./Logo";
import Switcher from "./Switcher";
import Search from "./Search";
import Cart from "./Cart";

const Header = () => {
  return (
    <Toolbar
      component="header"
      sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}
    >
      <Logo />
      <Box sx={{ display: "flex", justifyContent: "space-around", gap: 2 }}>
        <Search />
        <Cart />
        <Switcher />
      </Box>
    </Toolbar>
  );
};

export default Header;
