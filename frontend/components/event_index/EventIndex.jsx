import React from "react";
import EventIndexItem from "./EventIndexItem";

class EventIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    const events = this.props.events;
    return (
      <ul>
        {events.map(event => (
          <li>
            {event.title}
            <EventIndexItem
              event={event}
              deleteEvent={this.props.deleteEvent}
              key={event.id}
              currentUserId={this.props.currentUserId}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventIndex;
