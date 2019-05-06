import React from "react";

import { Link } from "react-router-dom";
class EventIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    const events = this.props.events;
    return (
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default EventIndex;
