import React from "react";
import { dateDecomp } from "../utils";
import styled from "@emotion/styled";
import { css } from "emotion";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 812px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-bottom: 20px;
`;

const CoverImage = styled.div`
  background: url(${props => props.image});
  width: 70%;
  background-size: cover;
  background-position: center;
`;

const Detail = styled.div`
  padding: 30px;
  flex-grow: 1;
  background-color: #ebf1f3;
  border-radius: 0px 5px 0px 0px;
`;

const deleteButton = css`
  font-size: 12px;
  border-radius: 5px;
  padding: 10px;
  /* background: none; */
  :hover {
    border: 0.1px solid #eeedf2;
  }
  cursor: pointer;
  font-weight: bold;
`;
const deleteButtonDiv = css`
  position: relative;

  padding-top: 20px;
`;

const dateAndLocation = css`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

const details = css`
  font-size: 12px;
`;
const eventTitle = css`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 15px;
`;

const link = css`
  text-decoration: none;
  color: black;
`;
const MyPurchasedTicket = ({
  title,
  date,
  time,
  location,
  cover,
  remove,
  event_id
}) => {
  const { month, day, year } = dateDecomp(date);
  return (
    <Container>
      <CoverImage image={cover} />
      <Detail>
        <div>
          <Link to={`/events/${event_id}`} className={link}>
            <h2 className={eventTitle}>{title}</h2>
          </Link>
          <h3 className={dateAndLocation}>Date And Time</h3>
          <p className={details}>
            {month} {day}, {year}
          </p>
          <p className={details}>{time}</p>
        </div>
        <div>
          <h3 className={dateAndLocation}>Location</h3>
          <p className={details}>{location}</p>
        </div>
        <div className={deleteButtonDiv}>
          <button onClick={remove} className={deleteButton}>
            Delete Ticket
          </button>
        </div>
      </Detail>
    </Container>
  );
};

export default MyPurchasedTicket;
