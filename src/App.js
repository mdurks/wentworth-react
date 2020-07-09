import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

// import MainHeader from "./components/MainHeader";
// import MainNav from "./components/MainNav";
import "./style.css";

// import Homepage from "./Homepage";
// import MainFooter from "./components/MainFooter";

// Create a re-useable reference to the details page which is code splited. This reference is used for all the product detail pages.
const MainHeader = loadable(() => import("./components/MainHeader"));
const MainNav = loadable(() => import("./components/MainNav"));
const MainFooter = loadable(() => import("./components/MainFooter"));
const Details = loadable(() => import("./Details"));

const App = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <MainNav />
      <main className="main">
        <Switch>
          {/* <Route exact path="/" component={Homepage} /> */}
          <Route
            exact
            path="/"
            component={loadable(() => import("./Homepage"))}
          />
          <Route path="/about" component={loadable(() => import("./About"))} />

          <Route path="/jewellery/rings/:id" component={Details} />
          <Route
            path="/jewellery/rings/"
            component={loadable(() => import("./Jewellery-Rings"))}
          />

          <Route path="/jewellery/earring/:id" component={Details} />
          <Route
            path="/jewellery/earrings/"
            component={loadable(() => import("./Jewellery-Earrings"))}
          />

          <Route path="/jewellery/necklace/:id" component={Details} />
          <Route
            path="/jewellery/necklaces/"
            component={loadable(() => import("./Jewellery-Necklaces"))}
          />

          <Route path="/jewellery/bracelet/:id" component={Details} />
          <Route
            path="/jewellery/bracelets/"
            component={loadable(() => import("./Jewellery-Bracelets"))}
          />

          <Route path="/jewellery/other/:id" component={Details} />
          <Route
            path="/jewellery/others/"
            component={loadable(() => import("./Jewellery-Others"))}
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
