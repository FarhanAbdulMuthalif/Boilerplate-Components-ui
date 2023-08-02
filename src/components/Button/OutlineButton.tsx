import { Button } from "@mui/material";
import React from "react";

const OutlineButton = ({
  children,
  onClick,
  type = "button",
}: OutButtonTypeProps) => {
  return (
    <Button variant="outlined" type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default OutlineButton;
