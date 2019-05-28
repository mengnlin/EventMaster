import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import eventErrorsReducer from "./event_errors_reducer";
import purchasedTicketErrorsReducer from "./purchasedTicketErrorsReducer";
const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  event: eventErrorsReducer,
  purchasedTicket: purchasedTicketErrorsReducer
});
export default errorsReducer;
