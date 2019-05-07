import React from "react";
import { css } from "emotion";

import NavBarButton from "../NavBarButton";

const EventManageBar = ({ eventId, deleteEvent }) => {
  return (
    <div className={EventEditBar}>
      <NavBarButton label="Edit" link={`/events/${eventId}/edit`} />
      <NavBarButton label="View" link={`/events/${eventId}`} />
      {/* {console.log(deleteEvent)} */}
      <button onClick={() => deleteEvent(eventId)}>Delete</button>
    </div>
  );
};

const EventEditBar = css`
  line-height: 20px;
  margin-top: 10px;
`;
export default EventManageBar;
