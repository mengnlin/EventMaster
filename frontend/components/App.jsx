import React from "react";
import GreetingContainer from "./greeting/greetingContainer";
import { Route } from "react-router-dom";
import LoginFormContainer from "../components/session_form/LoginFormContainer";
import SignupFormContainer from "../components/session_form/SignupFormContainer";
import AuthRoute from "../util/route_util";
const App = () => (
  <div>
    <h1>Event Master</h1>
    <GreetingContainer />

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
