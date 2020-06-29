import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./style.css";

// const myname = "SSSSMichael";
// const message = `Hello, my name is ${myname}`;

const MyCoolApp = () => {
  render(<App />, document.getElementById("app"));
};
MyCoolApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    MyCoolApp();
  });
}
