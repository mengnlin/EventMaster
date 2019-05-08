
json.extract! user, :id,:username

json.events do 
    json.array! user.event_ids
    
end 
