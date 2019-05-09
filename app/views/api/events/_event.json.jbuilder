json.extract! event, :title,:description,:event_date,:organizer_id,:id,:location,:time,:category
json.username event.user.username
json.pictureUrl url_for(event.picture) if event.picture.attached?


