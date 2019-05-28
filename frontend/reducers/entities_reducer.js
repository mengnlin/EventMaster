import { combineReducers } from "redux";
import eventReducer from "./event_reducer";
import userReducer from "./userReducer";
import purchasedTicketReducer from "./purchased_tickets_reducer";

const entitiesReducer = combineReducers({
  user: userReducer,
  events: eventReducer,
  purchased_tickets: purchasedTicketReducer
  //   session: sessionReducer
});

export default entitiesReducer;
