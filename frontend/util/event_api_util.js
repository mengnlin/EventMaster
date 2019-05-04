export const fetchEvent = id =>
  $.ajax({
    method: "GET",
    url: `/api/events/${id}`,
    date: { event }
  });

export const fetchEvents = events =>
  $.ajax({
    method: "GET",
    url: "/api/events",
    date: { events }
  });

export const createEvent = event =>
  $.ajax({
    method: "POST",
    url: "/api/events",
    data: event
  });

export const updateEvent = event =>
  $.ajax({
    method: "PATCH",
    url: `/api/events/${event.id}`,
    data: { event }
  });

export const destroyEvent = () =>
  $.ajax({
    method: "DESTROY",
    url: "/api/events"
  });
