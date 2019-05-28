
json.extract! user, :id,:username

json.events do 
    json.array! user.event_ids
end 

json.purchased_tickets do 
    json.array! user.purchased_tickets do |purchased_ticket|
        json.event_id purchased_ticket.event_id
    end  
end

# json.extract! purchase_ticket, :quantity,:price