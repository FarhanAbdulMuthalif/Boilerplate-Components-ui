import React from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarComp = ({ open, onClose, content, type }: SnackbarProps) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={type} sx={{ width: "100%" }}>
        This is a success message!
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComp;
