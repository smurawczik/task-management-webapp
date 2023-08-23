import { useAppSelector } from "@/store/hooks";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { StyledListItemButton } from "./ListItemButton";
import { SidenavTooltip } from "./Tooltip";

export const Sidenav = () => {
  const router = useRouter();
  const { pathname } = router;
  const user = useAppSelector((state) => state.user);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  if (!user?.email) {
    return null;
  }

  const sidenavWidth = isDesktop ? 200 : 58;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidenavWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: sidenavWidth,
          boxSizing: "border-box",
          background: "rgb(22, 30, 41)",
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{ overflow: "auto" }}
        mx={1}
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <List
          sx={{
            " > li": {
              marginBottom: 1,
            },
          }}
        >
          <ListItem disablePadding>
            <SidenavTooltip
              title={!isDesktop ? "board" : ""}
              placement="right"
              arrow
            >
              <StyledListItemButton selected={pathname === "/board"}>
                <ListItemIcon>
                  <DeveloperBoardIcon />
                </ListItemIcon>
                <ListItemText primary="board" />
              </StyledListItemButton>
            </SidenavTooltip>
          </ListItem>
          <ListItem disablePadding>
            <SidenavTooltip
              title={!isDesktop ? "projects" : ""}
              placement="right"
              arrow
            >
              <StyledListItemButton>
                <ListItemIcon>
                  <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText primary="projects" />
              </StyledListItemButton>
            </SidenavTooltip>
          </ListItem>
        </List>
        <Box flexGrow={1} />
        <List>
          <ListItem disablePadding>
            <SidenavTooltip
              title={!isDesktop ? "settings" : ""}
              placement="right"
              arrow
            >
              <StyledListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="settings" />
              </StyledListItemButton>
            </SidenavTooltip>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
