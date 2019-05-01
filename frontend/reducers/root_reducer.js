import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./sessionReducer";
import errorReducer from "./errors_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorReducer
});

export default rootReducer;
