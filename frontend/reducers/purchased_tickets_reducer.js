import {
  RECEIVE_ALL_PURCHASED_TICKETS,
  RECEIVE_CURRENT_PURCHASED_TICKET,
  DELETE_TICKET
} from "../actions/purchased_tickets_actions";

const purchasedTicketReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PURCHASED_TICKETS:
      return action.purchased_tickets;
    case DELETE_TICKET:
      let newstate = [...state];
      return newstate.filter(ele => ele.id !== action.id);
    default:
      return state;
  }
};

export default purchasedTicketReducer;
