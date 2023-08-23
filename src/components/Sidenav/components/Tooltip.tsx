import { styled, TooltipProps, Tooltip, tooltipClasses } from "@mui/material";
import { teal } from "@mui/material/colors";

export const SidenavTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: teal[200],
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: teal[200],
    color: theme.palette.common.black,
  },
}));
