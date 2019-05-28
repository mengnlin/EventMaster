export const fetchPurasedTickets = () =>
  $.ajax({
    method: "GET",
    url: "api/purchased_tickets"
  });

export const createPurchasedTicket = purchased_ticket =>
  $.ajax({
    method: "POST",
    url: "api/purchased_tickets"
  });

export const deletePurchaseTicket = id =>
  $.ajax({
    method: "DELETE",
    url: `api/purchase_tickets/${id}`
  });
