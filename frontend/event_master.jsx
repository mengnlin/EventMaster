import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import {
  fetchEvent,
  fetchEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from "./actions/event_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        user: window.currentUser
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchEvent = fetchEvent;
  window.fetchEvents = fetchEvents;
  window.createEvent = createEvent;
  window.updateEvent = updateEvent;
  window.deleteEvent = deleteEvent;

  ReactDOM.render(<Root store={store} />, root);
});
