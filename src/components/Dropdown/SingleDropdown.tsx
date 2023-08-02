"use client";

import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

const SingleDropdown = ({
  value = "",
  onChange,
  options,
}: SingleDropdownProps) => {
  const [DwValue, setDwValue] = useState(value);
  const HandlerDWVal = (e: SelectChangeEvent) => {
    setDwValue(e.target.value as string);
  };
  return (
    <Select value={DwValue ? DwValue : ""} onChange={HandlerDWVal} displayEmpty>
      <MenuItem value="" disabled>
        Select Dropdown
      </MenuItem>
      {options.map((data: string) => {
        return (
          <MenuItem key={data} value={data}>
            {data}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default SingleDropdown;
