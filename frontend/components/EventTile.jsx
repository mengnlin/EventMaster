import React from "react";
import "./EventTile.css";

const monthMap = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "June",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};
const EventTile = ({ title, location, date, cover }) => {
  const month = monthMap[date.split("-")[1]];
  const day = date.split("-")[2];
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
            <p className="event-tile-date">{day}</p>
          </div>
          <div className="event-tile-text-right">
            <h3>{title}</h3>
            <span className="event-tile-text-right-date-time">{date}</span>
            <span className="event-tile-text-right-location">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTile;
