import React from "react";
import "./scss/main.scss";
import AppDashboard from "./components/pages/AppDashboard.js";
import AppModules from "./components/pages/AppModules.js";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/mainBox/:id" component={AppModules} />
      <Route path="/" component={AppDashboard} />
    </Switch>
  );
};

export default App;
