import React from "react";
import "./GeneralEventsView.css";
import EventTile from "./EventTile";
const EventsGrid = ({ title, events }) => {
  return (
    <div className="general-events-container">
      <div className="general-events-inner">
        <div className="general-events-category">{title}</div>
        <div className="general-events-view">
          {events.map(event => (
            <EventTile
              title={event.title}
              location={event.location}
              date={event.event_date}
              key={event.id}
              eventId={event.id}
              cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F57940989%2F57416335505%2F1%2Foriginal.20190306-023109?w=512&auto=compress&rect=0%2C0%2C9000%2C4500&s=08481b8b673075ee32a4d075b715b903"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
