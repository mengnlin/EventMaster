import React from "react";

import { storiesOf } from "@storybook/react";

import GeneralEventsView from "../GeneralEventsView";

storiesOf("GeneralEventsView ", module).add("default", () => (
  <GeneralEventsView Category="Editor's Pick" />
));
