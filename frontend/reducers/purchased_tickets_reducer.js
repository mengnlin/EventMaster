import {
  RECEIVE_ALL_PURCHASED_TICKETS,
  RECEIVE_CURRENT_PURCHASED_TICKET,
  DELETE_TICKET
} from "../actions/purchased_tickets_actions";

const purchasedTicketReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_PURCHASED_TICKET:
      return Object.assign({}, state, {
        [action.purchased_ticket.id]: action.purchased_ticket
      });
    case RECEIVE_ALL_PURCHASED_TICKETS:
      return action.purchased_tickets;
    case DELETE_TICKET:
      let newstate = Object.assign({}, state);
      delete newstate[action.id];
      return newstate;
    default:
      return state;
  }
};

export default purchasedTicketReducer;
