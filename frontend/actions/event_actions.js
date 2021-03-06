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
export const removeEvent = id => ({
  type: DELETE_EVENT,
  id
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

export const updateEvent = (event, id) => dispatch =>
  APIUtil.updateEvent(event, id).then(
    event => dispatch(receiveCurrentEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const deleteEvent = id => dispatch =>
  APIUtil.deleteEvent(id).then(() => {
    dispatch(removeEvent(id));
  });

// export const fetchPickEvents = () => dispatch =>
//   APIUtil.fetchPickEvents().then(() => {
//     dispatch(receiveAllEvents());
//   });

// export const fetchCategoryEvents = () => dispatch =>
//   APIUtil.fetchCategoryEvents().then(() => dispatch(receiveAllEvents()));

// if (this.props.isEditorPick) {
//   events => this.setState({ events }));
// } else {
//   fetchCategoryEvents(this.props.category).then(events =>
//     this.setState({ events })
//   );
// }
