json.extract! event, :title,:description,:event_date,:organizer_id,:id,:location,:time,:category

json.username event.user.username

json.ticket do 
    json.quantity event.ticket.quantity
    json.price event.ticket.price
    json.ticketId event.ticket.id
end 
json.purchased_ticket_count event.purchased_tickets.length
json.pictureUrl url_for(event.picture) if event.picture.attached?

if event.user.collections.find_by(event_id:event.id)
    json.followed_id event.user.collections.find_by(event_id:event.id).id
end
if event.user.followed_events.include?(event)
    json.isLike true
else  
    json.isLike false 
end 