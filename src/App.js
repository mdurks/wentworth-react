import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import loadable from "@loadable/component";

import MainNav from "./components/MainNav";
import "./style.css";

import Landing from "./Landing";
import MainFooter from "./components/MainFooter";

const App = () => {
  return (
    <BrowserRouter>
      <MainNav />
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
      <MainFooter />
    </BrowserRouter>
  );
};

export default App;
