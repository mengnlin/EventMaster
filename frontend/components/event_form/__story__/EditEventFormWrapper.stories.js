import React from "react";

import { storiesOf } from "@storybook/react";
import EventEditorWrapper from "../EventEditorWrapper";

storiesOf("EditEventForm", module).add("default", () => (
  <EventEditorWrapper
    title="Basic Info"
    description="Name your event and tell event-goers why they should come. Add details that highlight what makes it unique."
  >
    <input />
  </EventEditorWrapper>
));
