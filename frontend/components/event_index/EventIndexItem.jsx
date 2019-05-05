import React from "react";
import { Link } from "react-router-dom";
const EventIndedxItem = ({ event, deleteEvent, currentUserId }) => {
  if (currentUserId === event.organizer_id) {
    return (
      <>
        <Link to={`events/${event.id}/edit`}>Edit</Link>
        <button onClick={() => deleteEvent(event.id)}>Delete</button>;
      </>
    );
  } else {
    return <Link to={`events/${event.id}/edit`}>Edit</Link>;
  }

  // return (
  //   <>
  //     <Link to={`events/${event.id}/edit`}>Edit</Link>}
  //   </>
};
export default EventIndedxItem;
