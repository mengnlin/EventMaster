import React from "react";
import "./EventTile.css";
const EventTile = ({ month, date, title, location, date_time, cover }) => {
  return (
    <div className="event-tile-outer-container">
      <div className="event-tile-inner-container">
        <div
          style={{ background: `url(${cover})`, backgroundSize: "cover" }}
          className="event-tile-cover"
        />
        <div className="event-tile-text-container">
          <div className="event-tile-text-left">
            <p className="event-tile-month">{month}</p>
            <p className="event-tile-date">{date}</p>
          </div>
          <div className="event-tile-text-right">
            <h3>{title}</h3>
            <span class="event-tile-text-right-date-time">{date_time}</span>
            <span class="event-tile-text-right-location">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTile;
