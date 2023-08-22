import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "../styles/globals.scss";
import { Sidenav } from "@/components/Sidenav/components/Sidenav";
import { Header } from "@/components/Header/components/Header";
import { Layout } from "@/components/Layout/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
