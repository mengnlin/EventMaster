import React from "react";
import "./GeneralEventsView.css";
import EventTile from "./EventTile";
const GeneralEventsView = ({ Category }) => {
  return (
    <div className="general-events-container">
      <div className="general-events-inner">
        <div className="general-events-category">{Category}</div>
        <div className="general-events-view">
          <EventTile
            title="spring festival"
            location="Dublin"
            date="23"
            month="May"
            date_time="May 23 2019 2PM"
            cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61626628%2F236983077089%2F1%2Foriginal.20190503-052549?w=512&auto=compress&rect=0%2C0%2C1920%2C960&s=8d4da2b1e66842bc76c30fb6069a0249"
          />

          <EventTile
            title="summer festival"
            location="Dublin"
            date="23"
            month="May"
            date_time="May 23 2019 2PM"
            cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F60581641%2F144792711456%2F1%2Foriginal.20190417-222347?w=512&auto=compress&rect=0%2C0%2C2160%2C1080&s=a8c833a24c11a3f05c9a42f8e3857ae4"
          />

          <EventTile
            title="fall festival"
            location="Dublin"
            date="23"
            month="May"
            date_time="May 23 2019 2PM"
            cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F60581641%2F144792711456%2F1%2Foriginal.20190417-222347?w=512&auto=compress&rect=0%2C0%2C2160%2C1080&s=a8c833a24c11a3f05c9a42f8e3857ae4"
          />

          <EventTile
            title="winter festival"
            location="Dublin"
            date="23"
            month="May"
            date_time="May 23 2019 2PM"
            cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61626628%2F236983077089%2F1%2Foriginal.20190503-052549?w=512&auto=compress&rect=0%2C0%2C1920%2C960&s=8d4da2b1e66842bc76c30fb6069a0249"
          />

          <EventTile
            title="another festival"
            location="Dublin"
            date="23"
            month="May"
            date_time="May 23 2019 2PM"
            cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61626628%2F236983077089%2F1%2Foriginal.20190503-052549?w=512&auto=compress&rect=0%2C0%2C1920%2C960&s=8d4da2b1e66842bc76c30fb6069a0249"
          />

          <EventTile
            title="one moew festival"
            location="Dublin"
            date="23"
            month="May"
            date_time="May 23 2019 2PM"
            cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61626628%2F236983077089%2F1%2Foriginal.20190503-052549?w=512&auto=compress&rect=0%2C0%2C1920%2C960&s=8d4da2b1e66842bc76c30fb6069a0249"
          />
          <EventTile
            title="one moew festival"
            location="Dublin"
            date="23"
            month="May"
            date_time="May 23 2019 2PM"
            cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61626628%2F236983077089%2F1%2Foriginal.20190503-052549?w=512&auto=compress&rect=0%2C0%2C1920%2C960&s=8d4da2b1e66842bc76c30fb6069a0249"
          />
          <EventTile
            title="one moew festival"
            location="Dublin"
            date="23"
            month="May"
            date_time="May 23 2019 2PM"
            cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61626628%2F236983077089%2F1%2Foriginal.20190503-052549?w=512&auto=compress&rect=0%2C0%2C1920%2C960&s=8d4da2b1e66842bc76c30fb6069a0249"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralEventsView;
