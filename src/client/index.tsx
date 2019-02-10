import React from "react";
import ReactDOM from "react-dom";
import "../css/style.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/:groupName" component={Main} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));
