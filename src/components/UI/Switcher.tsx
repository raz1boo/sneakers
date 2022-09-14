import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

const Switcher = () => {
  const [theme, setTheme] = useState(true);
  return (
    <Tooltip title="Theme">
      <IconButton
        onClick={() => setTheme(!theme)}
        sx={{
          opacity: 0.8,
          "&:hover": {
            opacity: 1,
            backgroundColor: "transparent",
          },
        }}
      >
        {theme ? (
          <IoMdSunny color="black" fontSize="30px" />
        ) : (
          <IoMdMoon color="black" fontSize="30px" />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Switcher;
