export const createCollection = collection =>
  $.ajax({
    method: "POST",
    url: "/api/collections",
    data: collection
  });

export const fetchCollectedEvents = () =>
  $.ajax({
    method: "GET",
    url: "/api/collections"
  });

export const deleteCollectedEvents = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/collections/${id}`,
    data: id
  });
