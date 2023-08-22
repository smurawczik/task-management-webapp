import { authAPI } from "@/api/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setUserFetchStatus } from "@/store/user/user.slice";
import { UserFetchStatus } from "@/store/user/user.types";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

export const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  if (
    user?.fetchStatus !== UserFetchStatus.SUCCESS &&
    user?.fetchStatus !== UserFetchStatus.ERROR
  ) {
    return null;
  }

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Box flexGrow={1} />
        {user?.email ? (
          <Button
            variant="outlined"
            endIcon={<LogoutIcon />}
            sx={{ borderRadius: 6 }}
            onClick={async () => {
              await authAPI.logout();
              dispatch(setUserFetchStatus(UserFetchStatus.IDLE));
            }}
          >
            Logout
          </Button>
        ) : (
          <Button endIcon={<LoginIcon />}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
