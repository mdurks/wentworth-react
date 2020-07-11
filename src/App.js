import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import "./style.css";

// Create a re-useable reference to the details page which is code splited. This reference is used for all the product detail pages.
const MainHeader = loadable(() => import("./components/MainHeader"));
const MainNav = loadable(() => import("./components/MainNav"));
const MainFooter = loadable(() => import("./components/MainFooter"));
const Details = loadable(() => import("./Details"));
const Product_Listings = loadable(() => import("./Product-Listings"));

const App = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <MainNav />
      <main className="main">
        <Switch>
          <Route
            exact
            path="/"
            component={loadable(() => import("./Homepage"))}
          />
          <Route path="/about" component={loadable(() => import("./About"))} />

          <Route path="/engagement/rings/:id" component={Details} />

          <Route path="/weddings/necklaces/:id" component={Details} />
          <Route path="/weddings/earrings/:id" component={Details} />
          <Route path="/weddings/rings/:id" component={Details} />

          <Route path="/jewellery/other/:id" component={Details} />
          <Route path="/jewellery/bracelets/:id" component={Details} />
          <Route path="/jewellery/necklaces/:id" component={Details} />
          <Route path="/jewellery/earrings/:id" component={Details} />
          <Route path="/jewellery/rings/:id" component={Details} />

          <Route path="/engagement/:id" component={Product_Listings} />
          <Route path="/weddings/:id" component={Product_Listings} />
          <Route path="/jewellery/:id" component={Product_Listings} />
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
