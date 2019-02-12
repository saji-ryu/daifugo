import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Top, Home } from "./components/pages";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Top} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));
