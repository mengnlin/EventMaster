import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./sessionReducer";
import errorReducer from "./errors_reducer";

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  error: errorReducer
});
