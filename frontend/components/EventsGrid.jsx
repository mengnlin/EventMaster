import React from "react";
import "./GeneralEventsView.css";
import EventTile from "./EventTile";
const EventsGrid = ({ title, events }) => {
  let eventsArray = Object.values(events);
  return (
    <div className="general-events-container">
      <div className="general-events-category">{title}</div>
      <div className="general-events-inner">
        <div className="general-events-view">
          {eventsArray.map(event => (
            <EventTile
              title={event.title}
              location={event.location}
              date={event.event_date}
              key={event.id}
              eventId={event.id}
              cover={event.pictureUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
