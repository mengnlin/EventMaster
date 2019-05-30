# json.partial! 'api/purchased_tickets/purchased_tickets_list',purchased_tickets:@purchased_tickets
# debugger
json.array! @purchased_tickets do |purchased_ticket| 
    json.purchased_ticket purchased_ticket.event_id
    
end 
