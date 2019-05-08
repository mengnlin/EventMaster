# json.events do 
#     json.array! @events,:title,:description,:event_date,:organizer_id,:id,:location,:time,:category
# end 

# json.array!(@events) do |event| 
#     # debugger
#     json.extract! event, :title,:description,:event_date,:organizer_id,:id,:location,:time,:category
# end 
@events.each do |event| 
    json.set! event.id do
        json.extract! event, :title,:description,:event_date,:organizer_id,:id,:location,:time,:category
    end 
end 
