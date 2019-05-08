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

const mapStateToProps = state => {
  return {
    ownEvents: state.entities.user.events,
    events: state.entities.events
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: id => dispatch(deleteEvent(id)),
  logout: () => dispatch(logout())
});

// const Timevari = time => {
//   time
//     .split("")
//     .slice(11, 19)
//     .join();
// };
class MyEvents extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    if (Object.keys(this.props.events).length === 0) {
      return null;
    }

    return (
      <div>
        <Bar>
          <NavBarButton label="Create Event" link="/event/new" />
          <NavBarButton label="Sign Out" link="/" onClick={this.props.logout} />
        </Bar>

        <div>
          <h1 className={myEventsHeading}>Manage Events</h1>
          <ul className={deleteDot}>
            {this.props.ownEvents.map(eventId => {
              if (this.props.events[eventId]) {
                return (
                  <li key={eventId}>
                    <MyEvent
                      title={this.props.events[eventId].title}
                      date={this.props.events[eventId].event_date}
                      time={this.props.events[eventId].time}
                      eventId={eventId}
                      deleteEvent={this.props.deleteEvent}
                    />
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
  // }
}

const myEventsHeading = css`
  font-size: 32px;
  margin: 10px auto 0 auto;
  padding: 20px 0 0px 0;
  line-height: 20px;
  max-width: 812px;
  height: 80px;
`;

const deleteDot = css`
  list-style-type: none;
  /* list-style-position: inside; */
  margin: 0;
  padding: 0;
`;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyEvents);
