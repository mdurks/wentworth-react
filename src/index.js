import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./style.css";

// const myname = "SSSSMichael";
// const message = `Hello, my name is ${myname}`;

const MyCoolApp = () => {
  return <App />;
};

render(<MyCoolApp />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept("./App", () => {
    MyCoolApp();
  });
}
