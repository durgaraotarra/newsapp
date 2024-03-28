import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/theme";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={appStore}>
      <App />
    </Provider>
  </ThemeProvider>
);
