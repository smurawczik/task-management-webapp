import { authAPI } from "@/api/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  clearUser,
  setUser,
  setUserFetchStatus,
} from "@/store/user/user.slice";
import { UserFetchStatus } from "@/store/user/user.types";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useLoggedInUser = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userFetchStatus = useAppSelector((state) => state.user.fetchStatus);

  useEffect(() => {
    const fetchUser = async () => {
      if (userFetchStatus !== UserFetchStatus.IDLE) return;

      try {
        dispatch(setUserFetchStatus(UserFetchStatus.LOADING));
        const response = await authAPI.verify();

        if (response.status !== 200) {
          dispatch(setUserFetchStatus(UserFetchStatus.ERROR));
          return;
        }

        const user = response.data;
        dispatch(setUser(user));
      } catch (error) {
        dispatch(setUserFetchStatus(UserFetchStatus.ERROR));
        dispatch(clearUser());
        console.log(error);
      }
    };

    fetchUser();
  }, [dispatch, userFetchStatus]);

  useEffect(() => {
    if (userFetchStatus === UserFetchStatus.LOADING) return;

    if (
      userFetchStatus === UserFetchStatus.SUCCESS &&
      window.location.pathname === "/"
    ) {
      router.push("/projects");
    } else if (
      userFetchStatus === UserFetchStatus.ERROR &&
      window.location.pathname !== "/"
    ) {
      router.push("/");
    }
  }, [router, userFetchStatus]);
};
