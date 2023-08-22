import { authAPI } from "@/api/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setUserFetchStatus } from "@/store/user/user.slice";
import { UserFetchStatus } from "@/store/user/user.types";
import { Button } from "@mui/material";

export const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  return (
    <header>
      {user?.email ? (
        <Button
          onClick={async () => {
            await authAPI.logout();
            dispatch(setUserFetchStatus(UserFetchStatus.IDLE));
          }}
        >
          Logout {user.email}
        </Button>
      ) : (
        <Button>Login</Button>
      )}
    </header>
  );
};
