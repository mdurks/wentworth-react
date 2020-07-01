import React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import App from "./App";

const client = new ApolloClient({
  uri:
    "https://api-eu-central-1.graphcms.com/v2/ckbutikwk031a01xy9crkcskv/master",
});

const renderApp = () => {
  // Abstract out App to enable hot module replacement, routing and code splitting
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("app")
  );
};
renderApp();

// Enable hot module replacement while the app is running without having to do full page reloads. Great for keeping state in the browser whilst making changes to components. Only available in Dev.
if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
