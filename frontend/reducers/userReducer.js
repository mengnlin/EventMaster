import merge from "lodash/merge";
import { DELETE_EVENT, RECEIVE_CURRENT_EVENT } from "../actions/event_actions";
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
    case DELETE_EVENT: {
      let newstate = Object.assign({}, state);
      newstate.events = newstate.events.filter(event => event.id !== action.id);
      return newstate;
    }
    case RECEIVE_CURRENT_EVENT: {
      if (state.events.includes(action.event.id)) {
        return state;
      }
      let newstate = { ...state };
      newstate.events = [...newstate.events, action.event.id];
      return newstate;
    }
    default:
      return state;
  }
};

export default userReducer;
