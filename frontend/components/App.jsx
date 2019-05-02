import React from "react";
import GreetingContainer from "./greeting/greetingContainer";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "../components/session_form/LoginFormContainer";
import SignupFormContainer from "../components/session_form/SignupFormContainer";
import AuthRoute from "../util/route_util";
const App = () => (
  <div>
    <GreetingContainer />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
