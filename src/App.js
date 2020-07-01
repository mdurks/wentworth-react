import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import loadable from "@loadable/component";

import "./style.css";

import Landing from "./Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={loadable(() => import("./About"))} />
        <Route
          path="/contact"
          component={loadable(() => import("./Contact"))}
        />
        <Route component={loadable(() => import("./FourOhFour"))} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
