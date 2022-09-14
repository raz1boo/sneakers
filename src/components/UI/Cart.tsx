import { IconButton, Typography, Tooltip } from "@mui/material";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

const Cart = () => {
  const [value, setValue] = useState(0);
  return (
    <Tooltip title="Cart">
      <IconButton
        onClick={() => setValue(value + 1)}
        sx={{
          opacity: 0.8,
          display: "flex",
          justifyContent: "center",
          "&:hover": {
            opacity: 1,
            backgroundColor: "transparent",
          },
        }}
      >
        <Typography
          component="span"
          variant="body2"
          sx={{
            color: "white",
            position: "absolute",
            top: 20,
          }}
        >
          {value}
        </Typography>
        <FaShoppingBag color="black" fontSize="30px" />
      </IconButton>
    </Tooltip>
  );
};

export default Cart;
