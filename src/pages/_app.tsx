import { Layout } from "@/components/Layout/components/Layout";
import { theme } from "@/components/ThemeRegistry/theme";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { DragDropContext } from "react-beautiful-dnd";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
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
