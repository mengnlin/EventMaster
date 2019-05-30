import {
  RECEIVE_ALL_PURCHASED_TICKETS,
  RECEIVE_CURRENT_PURCHASED_TICKET,
  CLEAR_ERRORS
} from "../actions/purchased_tickets_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PURCHASED_TICKETS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
