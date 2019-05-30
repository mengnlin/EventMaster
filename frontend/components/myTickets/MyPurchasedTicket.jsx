import React from "react";
import { dateDecomp } from "../utils";
import { css } from "emotion";

const MyPurchasedTicket = ({ title, date, time, location, cover }) => {
  const { month, day, year } = dateDecomp(date);
  return (
    <div className={myPurchasedTicketContainer}>
      <div className={myPurchasedTicketImageContainer}>
        <img src={`${cover}`} className={image} />
      </div>
      <div className={myPurchasedTicketTitleContainer}>
        <div>
          <h3>{title}</h3>
          <h3>Date And Time</h3>
          <p>
            {month} {day},{year}, {time}
          </p>
        </div>
        <div>
          <h3>Location</h3>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

const myPurchasedTicketContainer = css`
  margin: 0 auto 30px auto;
  padding: 0;
  width: 300px;
  height: 250px;
  position: absolute;
  display: flex;
`;

const myPurchasedTicketImageContainer = css`
  height: 360px;
  width: 100%;
`;
const image = css`
  height: 100%;
  width: 700px;
`;
const myPurchasedTicketTitleContainer = css`
  padding: 30px;
  /* margin-right: 15px; */
  flex-grow: 1;
  /* z-index: 1; */
  background-color: #ebf1f3;
  border-radius: 0px 5px 0px 0px;
`;

export default MyPurchasedTicket;
