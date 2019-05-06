import EventTile from "../EventTile";
import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("EventTile", module).add("default", () => (
  <EventTile
    title="spring festival"
    location="Dublin"
    date="23"
    month="May"
    date_time="May 23 2019 2PM"
    cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61626628%2F236983077089%2F1%2Foriginal.20190503-052549?w=512&auto=compress&rect=0%2C0%2C1920%2C960&s=8d4da2b1e66842bc76c30fb6069a0249"
  />
));
