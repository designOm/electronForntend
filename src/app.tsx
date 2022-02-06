import * as React from "react";
import * as ReactDOM from "react-dom";
import { ActiveThemeProvider } from "./components";
import AppRoutes from "./Routes";
import GlobalStyleSheet from "./styles.global";
import { defaultTheme } from "./theme";


const PathApp = () => {
  return (
    <ActiveThemeProvider theme={defaultTheme}>
      <AppRoutes />
      {/* <h1>App Loaded</h1> */}
      <GlobalStyleSheet />
    </ActiveThemeProvider>
  );
};

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <PathApp />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

render();
