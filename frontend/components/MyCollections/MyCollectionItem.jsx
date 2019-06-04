import React from "react";
import { css } from "emotion";
import { dateDecomp } from "../utils";
import { deleteCollectedEvents } from "../../util/collection_util";
import { Link } from "react-router-dom";
const MyCollectionItem = ({
  reFetch,
  cover,
  date,
  location,
  title,
  time,
  id,
  event_id
}) => {
  const { month, day } = dateDecomp(date);
  return (
    <div className={LikesItemOuter}>
      <div className={LikesItemInner}>
        <div className={leftImage}>
          <img src={`${cover}`} className={likeCover} />
        </div>
        <div className={middleDescription}>
          <div className={MiddleTitle}>
            <Link to={`/events/${event_id}`} className={link}>
              {title}
            </Link>
          </div>
          <div className={MiddleDate}>
            <p>
              {month}, {day}, {time}
            </p>
          </div>
          <div className={MiddleLocation}>{location}</div>
          <div className={rightLike}>
            <img
              className={heartIcon}
              src="redHeart.png"
              onClick={() => deleteCollectedEvents(id).then(() => reFetch())}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const LikesItemOuter = css`
  /* background: lightblue; */
  margin: 10px auto 0 auto;
  padding: 20px 0 0px 0;
  max-width: 812px;
  box-sizing: border-box;
  height: 150px;
  padding: 8px;
  :hover {
    border: 0.1px solid #eeedf2;
  }
`;

const LikesItemInner = css`
  /* background: lightyellow; */
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 812px;
  margin-top: 20px;
  height: 134px;
`;
const leftImage = css`
  /* background: lightcoral; */
  width: 220px;
  height: 110px;
`;

const likeCover = css`
  max-height: 100%;
  max-width: 100%;
`;
const middleDescription = css`
  /* background: lightskyblue; */
  width: 670px;
  height: 110px;
  padding-left: 24px;
  padding-right: 8px;
  /* display: flex; */
  /* flex-direction:
   column; */
  /* align-items: left; */
  flex-grow: 1;
`;

const MiddleTitle = css`
  /* background: lightcoral; */
  min-height: 24px;
  color: rgb(57, 54, 79);
  font-size: 18px;
  font-weight: bold;
`;

const MiddleDate = css`
  /* background: lightcoral; */
  font-size: 12px;
  line-height: 16px;
  color: rgb(111, 114, 135);
`;

const MiddleLocation = css`
  /* background: lightcoral; */
  font-size: 12px;
  line-height: 16px;
  color: rgb(111, 114, 135);
`;
const rightLike = css`
  /* padding-top: 10px; */
  position: relative;
  right: -500px;
  /* background: lightgreen; */
`;

const heartIcon = css`
  cursor: pointer;
`;
const link = css`
  text-decoration: none;
  color: black;
`;
export default MyCollectionItem;
