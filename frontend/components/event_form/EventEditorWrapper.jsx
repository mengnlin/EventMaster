import React from "react";
import "./EditEventFormWrapper.css";

const EventEditorWrapper = ({ title, description, icon, children }) => (
  <section>
    <div />
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  </section>
);

export default EventEditorWrapper;
