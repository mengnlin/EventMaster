# json.events do 
#     json.array! @events,:title,:description,:event_date,:organizer_id,:id,:location,:time,:category
# end 

# json.array!(@events) do |event| 
#     # debugger
#     json.extract! event, :title,:description,:event_date,:organizer_id,:id,:location,:time,:category
# end 
# json.array! @events, partial: 'api/events/event', as: :event 
# json.array! @events do |event| 
#     json.extract! event, :title,:description,:event_date,:organizer_id,:id,:location,:time,:category
#     json.pictureUrl url_for(event.picture) if event.picture.attached? 
# end 

@events.each do |event| 
 json.set! event.id do 
    json.partial! 'api/events/event', event:event
 end 
end 