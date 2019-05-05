import * as APIUtil from "../util/event_api_util";

export const RECEIVE_CURRENT_EVENT = "RECEIVE_CURRENT_EVENT";
export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const DELETE_EVENT = "DELETE_EVENT";
// export const UPDATE_EVENT = "UPDATE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
const receiveCurrentEvent = event => ({
  type: RECEIVE_CURRENT_EVENT,
  event
});

const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});
export const removeEvent = () => ({
  type: DELETE_EVENT
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchEvent = id => dispatch =>
  APIUtil.fetchEvent(id).then(
    event => dispatch(receiveCurrentEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const fetchEvents = () => dispatch =>
  APIUtil.fetchEvents().then(
    events => dispatch(receiveAllEvents(events)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const createEvent = event => dispatch =>
  APIUtil.createEvent(event).then(
    event => dispatch(receiveCurrentEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const updateEvent = event => dispatch =>
  APIUtil.updateEvent(event).then(
    event => dispatch(receiveCurrentEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const deleteEvent = id => dispatch =>
  APIUtil.deleteEvent(id).then(event => dispatch(removeEvent(id)));
