import React from "react";

import { storiesOf } from "@storybook/react";
import MyCollectionItem from "../MyCollections/MyCollectionItem";
storiesOf("MyCollectionItem", module).add("default", () => (
  <MyCollectionItem />
));
