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
      <main className="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={loadable(() => import("./About"))} />
          <Route
            path="/jewellery/rings/"
            component={loadable(() => import("./Jewellery-Rings"))}
          />
          <Route
            path="/jewellery/ring/:id"
            component={loadable(() => import("./Details"))}
          />

          <Route
            path="/jewellery/earrings/"
            component={loadable(() => import("./Jewellery-Earrings"))}
          />
          <Route
            path="/jewellery/earring/:id"
            component={loadable(() => import("./Details"))}
          />

          <Route
            path="/jewellery/necklaces/"
            component={loadable(() => import("./Jewellery-Necklaces"))}
          />
          <Route
            path="/jewellery/necklace/:id"
            component={loadable(() => import("./Details"))}
          />

          <Route
            path="/jewellery/bracelets/"
            component={loadable(() => import("./Jewellery-Bracelets"))}
          />
          <Route
            path="/jewellery/bracelet/:id"
            component={loadable(() => import("./Details"))}
          />

          <Route
            path="/jewellery/others/"
            component={loadable(() => import("./Jewellery-Others"))}
          />
          <Route
            path="/jewellery/other/:id"
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
