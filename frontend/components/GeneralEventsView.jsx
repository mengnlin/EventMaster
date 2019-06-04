import React from "react";
import EventsGrid from "./EventsGrid";
import { fetchCategoryEvents, fetchPickEvents } from "../util/event_api_util";
class GeneralEventsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    if (this.props.isEditorPick) {
      fetchPickEvents().then(events => this.setState({ events }));
    } else {
      fetchCategoryEvents(this.props.category).then(events =>
        this.setState({ events })
      );
    }
  }
  render() {
    return <EventsGrid title={this.props.title} events={this.state.events} />;
  }
}

export default GeneralEventsView;
