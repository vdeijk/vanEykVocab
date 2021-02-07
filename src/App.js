import React from "react";
import "./scss/main.scss";
import AppDashboard from "./components/pages/AppDashboard.js";
import AppModules from "./components/pages/AppModules.js";
import Login from "./components/pages/Login.js";
import PrivateRoute from "./components/pages/PrivateRoute.js";
import AuthWrapper from "./components/pages/AuthWrapper.js";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <AuthWrapper>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/mainBox/:id">
          <AppModules />
        </PrivateRoute>
        <PrivateRoute path="/">
          <AppDashboard />
        </PrivateRoute>
      </Switch>
    </AuthWrapper>
  );
};

export default App;
