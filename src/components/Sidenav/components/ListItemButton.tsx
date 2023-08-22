import { ListItemButton, styled } from "@mui/material";

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(0.75, 1),
}));
