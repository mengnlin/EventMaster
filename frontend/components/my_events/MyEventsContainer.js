import { connect } from "react-redux";
// import MyEvents from "./MyEvents";
import React from "react";
import { Link } from "react-router-dom";
import { fetchEvents, deleteEvent } from "../../actions/event_actions";

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
          <li>
            <span>{event.title}</span>
            <Link to={`events/${event.id}/edit`}>Edit</Link>
            <button onClick={() => this.props.deleteEvent(event.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyEvents);
