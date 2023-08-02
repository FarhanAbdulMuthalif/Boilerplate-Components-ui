"use client";

import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

const MultiDropdown = ({
  value = [],
  onChange,
  options,
}: MultiDropdownProps) => {
  const [DwValue, setDwValue] = useState(value);
  const HandlerDWVal = (e: SelectChangeEvent<{ value: unknown }>) => {
    setDwValue(Array.isArray(e.target.value) ? e.target.value : []);
  };
  return (
    <Select
      value={DwValue as any}
      onChange={HandlerDWVal}
      displayEmpty
      multiple
      renderValue={(selected) => {
        if (DwValue.length === 0) {
          return "Multi Dropdown";
        }
        return Array.isArray(selected) ? (selected as string[]).join(", ") : [];
      }}
    >
      <MenuItem value="" disabled>
        Select Field
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

export default MultiDropdown;
