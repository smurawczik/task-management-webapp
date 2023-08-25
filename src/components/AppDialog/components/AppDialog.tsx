import {
  Box,
  Dialog,
  DialogProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { FC, PropsWithChildren } from "react";

export const AppDialog: FC<PropsWithChildren<DialogProps>> = ({
  open,
  onClose,
  children,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleClose = (reason: "backdropClick" | "escapeKeyDown") => {
    onClose?.({}, reason);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth={isDesktop ? "sm" : "xs"}
      sx={{
        "& .MuiDialog-paper": {
          border: `1px solid ${teal[600]}`,
          boxShadow: `0 0 10px 3px ${teal[600]}, inset 0 0 7px 3px ${teal[600]}`,
          borderRadius: 2,
          backgroundColor: "black",
        },
      }}
    >
      <Box p={1}>{children}</Box>
    </Dialog>
  );
};
