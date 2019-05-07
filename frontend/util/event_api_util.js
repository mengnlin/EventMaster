export const fetchEvent = id =>
  $.ajax({
    method: "GET",
    url: `/api/events/${id}`
  });

export const fetchEvents = () =>
  $.ajax({
    method: "GET",
    url: "/api/events"
  });

export const createEvent = event =>
  $.ajax({
    method: "POST",
    url: "/api/events",
    data: event
  });

export const fetchCategoryEvents = category =>
  $.ajax({
    method: "GET",
    url: `/api/events?category=${category}`
  });
export const fetchPickEvents = () =>
  $.ajax({
    method: "GET",
    url: "/api/events?editorpick=true"
  });

export const updateEvent = event =>
  $.ajax({
    method: "PATCH",
    url: `/api/events/${event.id}`,
    data: event
  });

export const deleteEvent = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/events/${id}`
  });
