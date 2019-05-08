import React from "react";

const editEventFormData = {
  basicInfo: {
    title: "Basic Info",
    description:
      "Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.",
    icon: <img src="basicInfoIcon.png" />
  },
  location: {
    title: "Location",
    description:
      "Help people in the area discover your event and let attendees know where to show up.",
    icon: <img src="locationIcon.png" />
  },
  dateTime: {
    title: "Date and time",
    description:
      "Tell event-goers when your event starts and ends so they can make plans to attend.",
    icon: <img src="calendarIcon.png" />
  }
};
export default editEventFormData;
