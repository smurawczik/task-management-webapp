"use client";

import { authAPI } from "@/api/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";
import { GradientBorderBox } from "../../GradientBorderBox";
import { Logo } from "../../Logo";
import { setUserFetchStatus } from "@/store/user/user.slice";
import { UserFetchStatus } from "@/store/user/user.types";

export const Login = () => {
  const dispatch = useAppDispatch();
  const userFetchStatus = useAppSelector((state) => state.user.fetchStatus);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <GradientBorderBox>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        p={2}
        borderRadius={5}
        alignItems="center"
      >
        <Logo />
        <TextField
          variant="outlined"
          inputRef={emailRef}
          size="small"
          placeholder="Email"
          defaultValue="sebastian.murawczik@gmail.com"
        />
        <TextField
          variant="outlined"
          inputRef={passwordRef}
          size="small"
          placeholder="Password"
          type="password"
          defaultValue="11111111"
        />
        <GradientBorderBox>
          <Button
            color="primary"
            size="small"
            disabled={userFetchStatus === UserFetchStatus.LOADING}
            onClick={async () => {
              await authAPI.login(
                emailRef.current?.value,
                passwordRef.current?.value
              );

              dispatch(setUserFetchStatus(UserFetchStatus.IDLE));
            }}
          >
            Login
          </Button>
        </GradientBorderBox>
      </Box>
    </GradientBorderBox>
  );
};
