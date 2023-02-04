import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./Login";
import Registation from "./Registation";

import HomePage from "./HomePage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/Login" component={Login} />

          <Route exact path="/Registation" component={Registation} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
