import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import loadable from "@loadable/component";

import "./style.css";

import Landing from "./Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={loadable(() => import("./About"))} />
        <Route
          path="/jewellery"
          component={loadable(() => import("./Jewellery"))}
        />
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
