import React from "react";
import { dateDecomp, timeDecomp } from "../utils";
import "./EventShowDetails.css";
const EventShowDetails = ({ description, location, date, time }) => {
  const { year, month, day } = dateDecomp(date);
  console.log("time", time);
  const displayTime = timeDecomp(time);
  console.log("display", displayTime);
  return (
    <div className="event-show-detail-container">
      <div className="event-Show-description-container">
        <h3>Description</h3>
        <p>{description}</p>
      </div>

      <div className="event-show-date-container">
        <div>
          <h3>Date And Time</h3>
          <p>
            {month} {day}, {year}
          </p>
          <p>{displayTime}</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default EventShowDetails;
