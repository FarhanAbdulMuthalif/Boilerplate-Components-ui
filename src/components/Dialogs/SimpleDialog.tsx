import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import OutlineButton from "../Button/OutlineButton";
import FillButton from "../Button/FillButton";

const SimpleDialog = ({
  open,
  content,
  onClose,
  onSubmit,
}: SimpleDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
         {content}
        </DialogContentText>
        <DialogActions>
          <OutlineButton onClick={onClose}>Disagree</OutlineButton>
          <FillButton onClick={onSubmit}>Agree</FillButton>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
