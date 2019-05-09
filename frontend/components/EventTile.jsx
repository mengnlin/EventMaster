import React from "react";
import "./EventTile.css";
import { Link } from "react-router-dom";
import { dateDecomp } from "./utils";
const EventTile = ({ title, location, date, cover, eventId }) => {
  const { month, day } = dateDecomp(date);

  // console.log(cover);
  return (
    <div className="event-tile-outer-container">
      <div className="event-tile-inner-container">
        {/* <div> */}
        <Link to={`/events/${eventId}`}>
          {cover ? (
            <img src={`${cover}`} className="event-tile-cover" />
          ) : (
            <div />
          )}
        </Link>
        <div className="event-tile-text-container">
          <div className="event-tile-text-left">
            <p className="event-tile-month">{month}</p>
            <p className="event-tile-date">{day}</p>
          </div>
          <div className="event-tile-text-right">
            <Link to={`/events/${eventId}`} className="links">
              {title}
            </Link>
            <span className="event-tile-text-right-date-time">{date}</span>
            <span className="event-tile-text-right-location">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTile;
