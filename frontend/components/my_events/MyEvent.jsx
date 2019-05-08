import React from "react";
import "./MyEvent.css";
import EventManageBar from "./EventManageBar";

import { dateDecomp } from "../utils";

const MyEvent = ({ title, date, time, eventId, deleteEvent }) => {
  const { year, month, day } = dateDecomp(date);
  return (
    <div className="myevent-container">
      {/* <div className="myevent-view-container"> */}
      <div className="myevent-details">
        <p className="myevent-title">{title}</p>
        <p className="myevent-time">
          {month} {day},{year} {time}
        </p>
      </div>
      <div>
        <EventManageBar deleteEvent={deleteEvent} eventId={eventId} />
      </div>
    </div>
  );
};

export default MyEvent;
