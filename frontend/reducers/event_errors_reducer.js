import {
  RECEIVE_EVENT_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_CURRENT_EVENT,
  RECEIVE_ALL_EVENTS
} from "../actions/event_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case RECEIVE_ALL_EVENTS:
      return [];
    case RECEIVE_CURRENT_EVENT:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
