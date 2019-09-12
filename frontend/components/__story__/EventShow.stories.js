import React from "react";

import { storiesOf } from "@storybook/react";
import { StaticRouter } from "react-router-dom";

import EventShow from "../eventShow/EventShow";

storiesOf("EventShow", module).add("default", () => <EventShow />);
