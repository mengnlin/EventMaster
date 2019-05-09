import merge from "lodash/merge";
import {
  RECEIVE_CURRENT_EVENT,
  RECEIVE_ALL_EVENTS,
  DELETE_EVENT
} from "../actions/event_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
const eventReducer = (eventArray = [], action) => {
  Object.freeze(eventArray);
  switch (action.type) {
    case RECEIVE_CURRENT_EVENT:
      return eventArray.map(event => {
        if (event.id === action.event.id) {
          return action.event;
        } else {
          return event;
        }
      });
    case RECEIVE_ALL_EVENTS:
      return action.events;
    case LOGOUT_CURRENT_USER:
      return [];
    case DELETE_EVENT:
      return eventArray.filter(event => event.id !== action.id);
    default:
      return eventArray;
  }
};

export default eventReducer;
