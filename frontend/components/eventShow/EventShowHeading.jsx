import React from "react";
import { dateDecomp } from "../utils";
import { css } from "emotion";
const EventShowHeading = ({ title, date, organizer, cover }) => {
  const { month, day } = dateDecomp(date);
  return (
    <div className={eventShowHeadingContainer}>
      <div className={eventShowImageContainer}>
        <img src={`${cover}`} className={eventShowImage} />
      </div>
      <div className={eventShowTitleContainer}>
        <div className={eventShowDateContainer}>
          <p className={eventheadingdate}>{month}</p>
          <p className={eventheadingdate}>{day}</p>
        </div>
        <h1 className={eventheadingTitle}>{title}</h1>
        <p className={eventheadingOrganizer}>by {organizer}</p>
      </div>
    </div>
  );
};

const eventShowHeadingContainer = css`
  margin: 0, auto 30px auto;
  padding: 0;
  width: 1080px;
  height: 360px;
  position: relative;

  display: flex;
`;

const eventShowImageContainer = css`
  height: 360px;
  width: 720px;
  /* border: 1px solid grey; */

  padding: 0;
  margin: 0;
`;

const eventShowTitleContainer = css`
  padding-left: 15px;
  margin-right: 15px;
  width: 320px;
  background-color: #ebf1f3;
  border-radius: 0px 5px 0px 0px;
`;

const eventShowDateContainer = css`
  margin-top: 10px;
`;

const eventShowImage = css`
  border-image-slice: 100%;
  height: 100%;
  width: 100%;
  border-image-repeat: strech;
  border-radius: 5px 0 0 0px;
`;
const eventheadingdate = css`
  font-size: 17px;
  line-height: 21.25px;
  margin: 0;
  padding: 0 0 0 0;
`;

const eventheadingTitle = css`
  font-size: 20px;
  line-height: 21px;
  padding-bottom: 10px;
  position: relative;
  margin: 30px 0 20px;
  word-wrap: break-word;
  overflow: normal;
  width: 300px;
  height: 42px;
`;

const eventheadingOrganizer = css`
  font-size: 15px;
  color: rgb(111, 114, 135);
`;

export default EventShowHeading;
