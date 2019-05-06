import { combineReducers } from "redux";
import eventReducer from "./event_reducer";
import userReducer from "./userReducer";

const entitiesReducer = combineReducers({
  user: userReducer,
  events: eventReducer
  //   session: sessionReducer
});

export default entitiesReducer;
