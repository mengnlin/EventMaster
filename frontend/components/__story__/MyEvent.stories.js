import React from "react";

import { storiesOf } from "@storybook/react";
import MyEvent from "../my_events/MyEvent";

storiesOf("MyEvent", module).add("default", () => (
  <MyEvent date="2019-01-01" title="test" time="12" eventId="2" />
));
