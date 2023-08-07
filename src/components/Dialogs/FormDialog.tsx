import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";
import OutlineButton from "../Button/OutlineButton";
import FillButton from "../Button/FillButton";

const FormDialog = ({ open, content, onClose, onSubmit }: FormDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogTitle id="alert-dialog-title">{"Open form dialog"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          placeholder="Enter Email"
          type="email"
          fullWidth
          sx={{ width: "100%" }}
          variant="outlined"
          autoComplete="off"
        />
        <DialogActions>
          <OutlineButton onClick={onClose}>Cancel</OutlineButton>
          <FillButton onClick={onSubmit}>Subscribe</FillButton>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
