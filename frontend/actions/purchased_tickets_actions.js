import * as APIUtil from "../util/purchased_tickets_util";

export const RECEIVE_ALL_PURCHASED_TICKETS = "RECEIVE_ALL_PURCHASED_TICKETS";

export const DELETE_TICKET = "DELETE_TICKET";

export const RECEIVE_PURCHASED_TICKET_ERRORS =
  "RECEIVE_PURCHASED_TICKET_ERRORS";

export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveAllPurchasedTickets = purchased_tickets => ({
  type: RECEIVE_ALL_PURCHASED_TICKETS,
  purchased_tickets
});

export const receivePurchasedTicketErrors = errors => ({
  type: RECEIVE_PURCHASED_TICKET_ERRORS,
  errors
});

export const removePurchasedTicket = id => ({
  type: DELETE_TICKET,
  id
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchPurchasedTickets = () => dispatch =>
  APIUtil.fetchPurasedTickets().then(
    purchased_tickets =>
      dispatch(receiveAllPurchasedTickets(purchased_tickets)),
    errors => dispatch(receivePurchasedTicketErrors(errors.responseJSON))
  );

export const createPurchasedTicket = purchasedTicket => dispatch =>
  APIUtil.createPurchasedTicket(purchasedTicket).then(
    purchased_tickets =>
      dispatch(receiveAllPurchasedTickets(purchased_tickets)),
    errors => dispatch(receivePurchasedTicketErrors(errors.response.JSON))
  );

export const deletePurchasedTicket = id => dispatch =>
  APIUtil.deletePurchasedTicket(id).then(() => {
    dispatch(removePurchasedTicket(id));
  });
