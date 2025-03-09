import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle changes in the search field
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search submit when the icon is clicked
  const handleSearchSubmit = () => {
    console.log("Searching for:", searchTerm);
    // You can add logic here to perform the search
  };

  return (
    <TextField
    sx={{
        width:"70%",
        borderRadius:5
    }}
      value={searchTerm}
      onChange={handleSearchChange}
      variant="outlined"
      placeholder="Search..."
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearchSubmit}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
