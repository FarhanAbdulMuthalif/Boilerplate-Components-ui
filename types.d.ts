type OutButtonTypeProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
};
type FillButtonTypeProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
};
type SnackbarProps = {
  open: boolean;
  onClose: () => void;
  content: string;
  type: "error" | "warning" | "info" | "success";
};
type CustomTooltipProps = {
  children: React.ReactNode;
  title: string;
};

type TooltipWrapperProps = CustomTooltipProps & Omit<TooltipProps, "children">;

type SingleDropdownProps = {
  value?: string;
  onChange?: () => void;
  options: string[];
};
type MultiDropdownProps = {
  value?: string[];
  onChange?: () => void;
  options: string[];
};
type SimpleDialogProps = {
  open: boolean;
  onClose?: () => void;
  content: string;
  onSubmit?: () => void;
};
type FormDialogProps = {
  open: boolean;
  onClose?: () => void;
  content: string;
  onSubmit?: () => void;
};
