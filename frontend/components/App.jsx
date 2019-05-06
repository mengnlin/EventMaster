import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/LoginFormContainer";
import SignupFormContainer from "./session_form/SignupFormContainer";
import UpdateEventFormContainer from "./event_form/UpdateEventFormContainer";
import CreateEventFormContainer from "./event_form/CreateEventFormContainer";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Home from "./home";
import { Link } from "react-router-dom";
import EventShowContainer from "./eventShow/EventShowContainer";
import EventIndexContainer from "./event_index/EventIndexContainer";
import MyEventsContainer from "./my_events/MyEventsContainer";

const App = () => (
  <div>
    {/* // <Link to="/event/new">new event</Link>
    // <Link to="/events/:id/edit">edit event</Link> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute
        exact
        path="/event/new"
        component={CreateEventFormContainer}
      />
      <ProtectedRoute
        exact
        path="/events/:id/edit"
        component={UpdateEventFormContainer}
      />
      <Route exact path="/events/:id" component={EventShowContainer} />
      <Route exact path="/myevents" component={MyEventsContainer} />
      <Route exact path="/events" component={EventIndexContainer} />
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
