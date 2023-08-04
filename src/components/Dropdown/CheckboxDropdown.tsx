"use client";

import {
  Select,
  MenuItem,
  SelectChangeEvent,
  Checkbox,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

const CheckboxDropdown = ({
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
          return "Checkbox Dropdown";
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
            <Checkbox size="small" checked={DwValue.indexOf(data) > -1} />
            <ListItemText primary={data} />
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default CheckboxDropdown;
