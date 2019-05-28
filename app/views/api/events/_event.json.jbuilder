json.extract! event, :title,:description,:event_date,:organizer_id,:id,:location,:time,:category

json.username event.user.username

json.ticket do 
    json.quantity event.ticket.quantity
    json.price event.ticket.price
end 

json.pictureUrl url_for(event.picture) if event.picture.attached?


