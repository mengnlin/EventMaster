import { combineReducers } from "redux";

import usersReducer from "./userReducer";

const entitiesReducer = combineReducers({
  users: usersReducer

  //   session: sessionReducer
});

export default entitiesReducer;
