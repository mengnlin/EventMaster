import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import {
  createCollection,
  deleteCollectedEvents
} from "../../util/collection_util";

const EventShowRegisterBar = ({
  action,
  ticket,
  purchasedTicketNumber,
  id,
  isLike,
  collectionId,
  reFetch
}) => {
  const soldoutAlert = () => alert("Sorry, the tickets have sold out");
  console.log(collectionId);
  return (
    <div className={EventShowRegisterBarContainer}>
      <div className={leftBar}>
        {!isLike ? (
          <img
            className={heartIcon}
            src="heart.png"
            onClick={() =>
              createCollection({ event_id: id }).then(() => reFetch())
            }
          />
        ) : (
          <img
            className={heartIcon}
            src="redHeart.png"
            onClick={() =>
              deleteCollectedEvents(collectionId).then(() => reFetch())
            }
          />
        )}
      </div>
      <div className={rightBar}>
        {ticket.quantity <= purchasedTicketNumber ? (
          <button className={register} onClick={soldoutAlert}>
            Sold Out
          </button>
        ) : (
          <button className={register} onClick={action}>
            Purchase Ticket
          </button>
        )}
      </div>
    </div>
  );
};

const EventShowRegisterBarContainer = css`
  padding: 10px;
  height: 66px;
  z-index: 1;
  box-sizing: border-box;
  background: white;
  display: flex;
  border-top: 1px solid #dbdae3;
  border-bottom: 1px solid #dbdae3;
`;
const leftBar = css`
  flex-grow: 1;
  padding: 15px;
`;
const rightBar = css`
  border: 1px, solid;
  /* outline: none; */
  button:focus {
    outline: 0;
  }
`;
const register = css`
  position: flex;
  font-size: 15px;
  width: 300px;
  height: 44px;
  background: #199c56;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
const heartIcon = css`
  cursor: pointer;
`;
export default EventShowRegisterBar;
