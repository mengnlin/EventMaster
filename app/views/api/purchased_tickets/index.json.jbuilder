# json.partial! 'api/purchased_tickets/purchased_tickets_list',purchased_tickets:@purchased_tickets
# debugger
# json.array! @purchased_tickets do |purchased_ticket| 
#     json.purchased_ticket purchased_ticket.event_id
    
# end 


json.array! @purchased_tickets do |purchased_ticket|
    json.event_id purchased_ticket.event_id
    json.event_date purchased_ticket.event.event_date
    json.event_time purchased_ticket.event.time
    json.event_title purchased_ticket.event.title
    json.event_location purchased_ticket.event.location
    json.event_pictureUrl url_for(purchased_ticket.event.picture)
end  

