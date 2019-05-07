json.array!(@events) do |event| 
    # debugger
    json.extract! event, :title,:description,:event_date,:organizer_id,:id,:location,:time,:category
end 