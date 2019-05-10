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
    data: event,
    contentType: false,
    processData: false
  });

export const fetchCategoryEvents = category =>
  $.ajax({
    method: "GET",
    url: `/api/events?category=${category}`,
    contentType: false,
    processData: false
  });
export const fetchPickEvents = () =>
  $.ajax({
    method: "GET",
    url: "/api/events?editorpick=true",
    contentType: false,
    processData: false
  });

export const updateEvent = (event, id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/events/${id}`,
    data: event,
    contentType: false,
    processData: false
  });
};

export const deleteEvent = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/events/${id}`
  });
