import React from "react";
import { Tooltip, TooltipProps } from "@mui/material";

const ArrowTooltip: React.FC<TooltipWrapperProps> = ({ children, title }) => {
  return (
    <Tooltip title={title} arrow>
      <div>{children}</div>
    </Tooltip>
  );
};

export default ArrowTooltip;
