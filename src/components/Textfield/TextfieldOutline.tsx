import { TextField } from "@mui/material";
import React from "react";
type TextfieldProps = {
  placeholder: string;
  id?: string;
  className?: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent) => void;
  error?: boolean;
};

const TextfieldOutline = ({
  placeholder,
  id,
  className,
  value,
  onChange,
  error,
}: TextfieldProps) => {
  return (
    <TextField
      placeholder={placeholder}
      id={id}
      className={className}
      value={value}
      onChange={onChange}
      variant="outlined"
      error={error}
      helperText={error ? "Invalid Input" : ""}
    />
  );
};

export default TextfieldOutline;
