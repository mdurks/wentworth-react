import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import loadable from "@loadable/component";

import Landing from "./Landing";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/about" component={loadable(() => import("./About"))} />
        <Route
          path="/contact"
          component={loadable(() => import("./Contact"))}
        />
        <Route component={loadable(() => import("./FourOhFour"))} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
