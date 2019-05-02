import React from "react";
import GreetingContainer from "./greeting/greetingContainer";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginFormContainer from "../components/session_form/LoginFormContainer";
import SignupFormContainer from "../components/session_form/SignupFormContainer";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Home } from "./home";

const App = () => (
  <div>
    <GreetingContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
