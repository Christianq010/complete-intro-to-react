import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

// Our components
import Landing from "./Landing";
import Search from "./Search";

// 404
const FourOhFour = () => <h1>404</h1>;

// Main app
const App = () => (
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
      <Route component={FourOhFour} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
