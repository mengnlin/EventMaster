import { connect } from "react-redux";
// import MyEvents from "./MyEvents";
import React from "react";
import { Link } from "react-router-dom";
import { fetchEvents, deleteEvent } from "../../actions/event_actions";
import { logout } from "../../actions/session_actions";
import MyEvent from "./MyEvent";
import { css } from "emotion";
import Bar from ".././Bar";
import NavBarButton from "../NavBarButton";
const mapStateToProps = state => ({
  ownEvents: state.entities.user.events
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: id => dispatch(deleteEvent(id)),
  logout: () => dispatch(logout())
});

class MyEvents extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>
        <Bar>
          <NavBarButton label="Create Event" link="/event/new" />
          <NavBarButton label="Sign Out" link="/" onClick={this.props.logout} />
        </Bar>
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
      </div>
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
