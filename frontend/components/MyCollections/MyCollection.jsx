import React from "react";
import { dateDecomp } from "../utils";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 1080px;
  height: 400px;
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

const MyCollection = ({ title, date, time, location, cover, remove }) => {
  const { month, day, year } = dateDecomp(date);
  return (
    <Container>
      <CoverImage image={cover} />
      <Detail>
        <div>
          <h3>{title}</h3>
          <h3>Date And Time</h3>
          <p>
            {month} {day}, {year}, {time}
          </p>
        </div>
        <div>
          <h3>Location</h3>
          <p>{location}</p>
        </div>
      </Detail>
    </Container>
  );
};

export default MyCollection;
