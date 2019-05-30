export const fetchPurasedTickets = () =>
  $.ajax({
    method: "GET",
    url: "api/purchased_tickets"
  });

export const createPurchasedTicket = purchased_ticket =>
  $.ajax({
    method: "POST",
    url: "api/purchased_tickets",
    data: { ticket_id: purchased_ticket }
  });

export const deletePurchasedTicket = id =>
  $.ajax({
    method: "DELETE",
    url: `api/purchased_tickets/${id}`
  });
