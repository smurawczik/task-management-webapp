import { Header } from "@/components/Header/components/Header";
import { Sidenav } from "@/components/Sidenav/components/Sidenav";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { useAppSelector } from "@/store/hooks";
import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  useLoggedInUser();

  return (
    <>
      <Header />
      <Box display="flex">
        <Sidenav />
        <Box flexGrow={1}>{children}</Box>
      </Box>
    </>
  );
};
