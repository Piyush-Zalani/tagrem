import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Dashboard } from "../index";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
