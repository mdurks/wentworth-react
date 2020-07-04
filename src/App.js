import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import loadable from "@loadable/component";

import MainNav from "./components/MainNav";
import "./style.css";

import Homepage from "./Homepage";
import MainFooter from "./components/MainFooter";

const App = () => {
  return (
    <BrowserRouter>
      <MainNav />
      <main>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={loadable(() => import("./About"))} />
          <Route
            path="/details/:id"
            component={loadable(() => import("./Details"))}
          />
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
      </main>
      <MainFooter />
    </BrowserRouter>
  );
};

export default App;
