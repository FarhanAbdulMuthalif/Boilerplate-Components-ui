"use client";

import {
  Select,
  MenuItem,
  SelectChangeEvent,
  ListSubheader,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchDropdown = ({
  value = "",
  onChange,
  options,
}: SingleDropdownProps) => {
  const [DwValue, setDwValue] = useState(value);
  const HandlerDWVal = (e: SelectChangeEvent) => {
    setDwValue(e.target.value as string);
  };
  const [SearchText, setSearchText] = useState("");
  const containsText = (text: string, searchText: string) =>
    text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

  const displayedOptions = options.filter((option: string) =>
    containsText(option, SearchText)
  );

  return (
    <Select value={DwValue ? DwValue : ""} onChange={HandlerDWVal} displayEmpty>
      <ListSubheader>
        <TextField
          size="small"
          variant="outlined"
          autoFocus
          placeholder="Type to search..."
          /*  fullWidth */
          id="inside-search-select"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== "Escape") {
              // Prevents autoselecting item while typing (default Select behaviour)
              e.stopPropagation();
            }
          }}
        />
      </ListSubheader>
      <MenuItem value="" disabled>
        Search Dropdown
      </MenuItem>
      {displayedOptions.map((data: string) => {
        return (
          <MenuItem key={data} value={data}>
            {data}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default SearchDropdown;
