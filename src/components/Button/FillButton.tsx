import React from "react";
import { Button } from "@mui/material";
const FillButton = ({
  children,
  onClick,
  type = "button",
}: FillButtonTypeProps) => {
  return (
    <Button onClick={onClick} type={type} variant="contained">
      {children}
    </Button>
  );
};

export default FillButton;
