import merge from "lodash/merge";
import { DELETE_EVENT } from "../actions/event_actions";
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const userReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    case LOGOUT_CURRENT_USER:
      return null;
    case DELETE_EVENT:
      let newstate = Object.assign({}, state);
      newstate.events = newstate.events.filter(event => event.id !== action.id);
      // delete newstate.events[action.id];
      return newstate;
    default:
      return state;
  }
};

export default userReducer;
