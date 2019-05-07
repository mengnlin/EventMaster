import { connect } from "react-redux";
// import MyEvents from "./MyEvents";
import React from "react";
import { Link } from "react-router-dom";
import { fetchEvents, deleteEvent } from "../../actions/event_actions";
import MyEvent from "./MyEvent";
import { css } from "emotion";
const mapStateToProps = state => ({
  ownEvents: state.entities.user.events
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: id => dispatch(deleteEvent(id))
});

class MyEvents extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <ul>
        {this.props.ownEvents.map(event => (
          <li key={event.id} className={deleteDot}>
            <MyEvent
              title={event.title}
              date={event.event_date}
              time={event.time}
              eventId={event.id}
              deleteEvent={this.props.deleteEvent}
            />
          </li>
        ))}
      </ul>
    );
  }
}

const deleteDot = css`
  list-style-type: none;
`;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyEvents);
