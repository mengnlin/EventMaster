import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import NavBarButton from "../NavBarButton";

const EventManageBar = ({ eventId, deleteEvent }) => {
  return (
    <div className={EventEditBar}>
      <img src="edit.png" className={image} />
      <Link to={`/events/${eventId}/edit`} className={EventEditButton}>
        Edit
      </Link>

      <img src="view.png" className={image} />
      <Link to={`/events/${eventId}`} className={EventEditButton}>
        View
      </Link>

      <button onClick={() => deleteEvent(eventId)} className={deleteButton}>
        {" "}
        Delete
      </button>
    </div>
  );
};

const EventEditBar = css`
  line-height: 20px;
  margin-top: 10px;
`;

const EventEditButton = css`
  text-decoration: none;
  color: #6f7287;
  font-size: 14px;
  background: transparent;
  border: none;
  padding-right: 20px;
`;

const deleteButton = css`
  color: #6f7287;
  cursor: pointer;
`;
const image = css`
  width: 15px;
  padding: 0 0 0 10px;
  margin: 0;
`;
export default EventManageBar;
