import { combineReducers } from "redux";
import eventReducer from "./event_reducer";
import usersReducer from "./userReducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: eventReducer
  //   session: sessionReducer
});

export default entitiesReducer;
