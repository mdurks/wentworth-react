import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import FourOhFour from "./FourOhFour";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
