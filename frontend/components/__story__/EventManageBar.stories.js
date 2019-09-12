import EventManageBar from "../my_events/EventManageBar";
import React from "react";
import { storiesOf } from "@storybook/react";
import { StaticRouter } from "react-router-dom";

storiesOf("EventManageBar", module).add("default", () => (
  <StaticRouter>
    <EventManageBar />
  </StaticRouter>
));
