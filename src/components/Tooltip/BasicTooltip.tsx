import React from "react";
import { Tooltip, TooltipProps } from "@mui/material";

const BasicTooltip: React.FC<TooltipWrapperProps> = ({ children, title }) => {
  return (
    <Tooltip title={title}>
      <div>{children}</div>
    </Tooltip>
  );
};

export default BasicTooltip;
