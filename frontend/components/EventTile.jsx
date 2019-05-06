import React from "react";

const EventTile = ({ title, organizer, date, cover }) => {
  return (
    <div>
      <div style={{ background: `url(${cover})` }} />
      <h3>{title}</h3>
      <p>
        <span>{organizer}</span>
        <span>{date}</span>
      </p>
    </div>
  );
};

export default EventTile;
