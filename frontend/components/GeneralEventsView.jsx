import React from "react";
import EventsGrid from "./EventsGrid";
import { fetchCategoryEvents } from "../util/event_api_util";
class GeneralEventsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    fetchCategoryEvents("2").then(events => this.setState({ events }));
  }
  render() {
    return <EventsGrid title="Editor's Pick" events={this.state.events} />;
  }
}

export default GeneralEventsView;
