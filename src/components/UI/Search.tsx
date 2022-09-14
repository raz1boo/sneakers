import { IconButton, TextField, Tooltip, Box } from "@mui/material";
import { useState, useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdClear } from "react-icons/md";
import { useOutsideClick } from "rooks";

const Search = () => {
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setSearch(false));
  return (
    <Box sx={{ display: "flex" }} ref={ref}>
      <TextField
        id="outlined-search"
        label="Search"
        size="small"
        autoComplete="off"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        inputProps={{
          maxLength: 50,
        }}
        sx={{
          width: search ? 400 : 0,
          overflow: search ? "visible" : "hidden",
          transition: "0.3s",
        }}
      />
      <Tooltip title={search ? "Close" : "Search"}>
        <IconButton
          onClick={() => {
            setSearch(!search);
            setSearchValue("");
          }}
          sx={{
            opacity: 0.8,
            "&:hover": {
              opacity: 1,
              backgroundColor: "transparent",
            },
          }}
        >
          {search ? (
            <MdClear color="black" fontSize="30px" />
          ) : (
            <HiOutlineSearch color="black" fontSize="30px" />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Search;
