import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./style.css";

const MyCoolApp = () => {
  render(<App />, document.getElementById("app"));
};
MyCoolApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    MyCoolApp();
  });
}
