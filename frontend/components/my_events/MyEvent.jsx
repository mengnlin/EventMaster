import React from "react";
import "./MyEvent.css";
import EventManageBar from "./EventManageBar";

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
const MyEvent = ({ title, date, time, eventId, deleteEvent }) => {
  const year = date.split("-")[0];
  const month = monthMap[date.split("-")[1]];
  const day = date.split("-")[2];
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
