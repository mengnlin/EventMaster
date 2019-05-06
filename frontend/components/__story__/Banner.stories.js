import React from "react";

import { storiesOf } from "@storybook/react";

import Banner from "../Banner";

storiesOf("Banner", module)
  .add("default", () => (
    <Banner
      city="NYC"
      description="San Francisco has something for everyone. Foodies should grab a burrito in the Mission and hit up Farmers Market at the Ferry Building. Shop shoes and boutiques in Hayes Valley. Get outside and stroll Golden Gate Park, say to the Bison (seriously). See the city from the water by taking a ferry or catamaran under the bridge. Check out current events below."
      cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F38669877%2F108919755319%2F1%2Foriginal.jpg?w=512&auto=compress&s=1ff4700890efab707180f079192d1082"
    />
  ))
  .add("without description", () => (
    <Banner
      city="San francisco"
      cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F38669877%2F108919755319%2F1%2Foriginal.jpg?w=512&auto=compress&s=1ff4700890efab707180f079192d1082"
    />
  ));
