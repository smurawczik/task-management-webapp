import { useAppSelector } from "@/store/hooks";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { StyledListItemButton } from "./ListItemButton";
import { useRouter } from "next/router";

export const Sidenav = () => {
  const router = useRouter();
  const { pathname } = router;
  const user = useAppSelector((state) => state.user);

  if (!user?.email) {
    return null;
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 200,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 200,
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
            <StyledListItemButton selected={pathname === "/board"}>
              <ListItemIcon>
                <DeveloperBoardIcon />
              </ListItemIcon>
              <ListItemText primary="board" />
            </StyledListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <StyledListItemButton>
              <ListItemIcon>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary="projects" />
            </StyledListItemButton>
          </ListItem>
        </List>
        <Box flexGrow={1} />
        <List>
          <ListItem disablePadding>
            <StyledListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="settings" />
            </StyledListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
