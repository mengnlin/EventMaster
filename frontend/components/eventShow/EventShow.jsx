import React from "react";
import { withRouter } from "react-router-dom";
class EventShow extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.id);
  }

  render() {
    let event = this.props.event;
    if (event) {
      return (
        <div>
          <span>{event.title}</span>
          <span>{event.description}</span>
          <span>{event.event_date}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(EventShow);
