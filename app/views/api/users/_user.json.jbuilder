
json.extract! user, :id,:username

json.events do 
    json.array! user.event_ids
end 

json.purchased_tickets do 
    # json.partial! 'api/ticket',tickets:user.purchased_tickets
    json.array! user.purchased_tickets do |purchased_ticket|
        json.id purchased_ticket.id
        json.event_id purchased_ticket.event_id
        json.event_date purchased_ticket.event.event_date
        json.event_time purchased_ticket.event.time
        json.event_title purchased_ticket.event.title
        json.event_location purchased_ticket.event.location
        json.event_pictureUrl url_for(purchased_ticket.event.picture)
       
    end  
end
json.collections do 
    json.array! user.collection_ids
end  
json.likes do 
    json.array! user.followed_events do |event|
        json.event_id event.id
        json.event_date event.event_date
        json.event_time event.time
        json.event_title event.title
        json.event_location event.location
        json.event_pictureUrl url_for(event.picture)
    end 
end 
# json.extract! purchased_ticket, :quantity,:price