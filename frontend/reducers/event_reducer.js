import merge from "lodash/merge";
import {
  RECEIVE_CURRENT_EVENT,
  RECEIVE_ALL_EVENTS,
  DELETE_EVENT
} from "../actions/event_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
const eventReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_EVENT:
      return Object.assign({}, state, { [action.event.id]: action.event });
    case RECEIVE_ALL_EVENTS:
      return action.events;
    case LOGOUT_CURRENT_USER:
      return {};
    case DELETE_EVENT:
      let newstate = Object.assign({}, state);
      delete newstate[action.id];
      return newstate;
    default:
      return state;
  }
};

export default eventReducer;
