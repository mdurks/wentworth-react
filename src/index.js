import React from "react";
import { render } from "react-dom";
import App from "./App";

const renderApp = () => {
  // Abstract out App to enable hot module replacement, routing and code splitting
  render(<App />, document.getElementById("app"));
};
renderApp();

// Enable hot module replacement while the app is running without having to do full page reloads. Great for keeping state in the browser whilst making changes to components. Only available in Dev.
if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
