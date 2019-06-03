
json.array! @followed_events do |event|
     json.partial! 'api/events/event', event:event
end  
