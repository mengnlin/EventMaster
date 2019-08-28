import { connect } from "react-redux";
import React from "react";
import { fetchEvents, deleteEvent } from "../../actions/event_actions";
import { logout } from "../../actions/session_actions";
import MyEvent from "./MyEvent";
import { css } from "emotion";
import Bar from ".././Bar";
import NavBarButton from "../NavBarButton";
import { timeDecomp } from "../utils";
const mapStateToProps = state => {
  return {
    ownEvents: state.entities.user.events,
    events: Object.values(state.entities.events)
  };
};

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
    if (Object.keys(this.props.events).length === 0) {
      return (
        <>
          <Bar>
            <NavBarButton label="Create Event" link="/event/new" />
            <NavBarButton label="My Tickets" link="/mytickets" />
            <NavBarButton label="My Likes" link="mycollections" />
            <NavBarButton
              label="Sign Out"
              link="/"
              onClick={this.props.logout}
            />
          </Bar>
          <h1 className={myEventsHeading}>Manage Events</h1>
        </>
      );
    } else {
      return (
        <div>
          <Bar>
            <NavBarButton label="Create Event" link="/event/new" />
            <NavBarButton label="My Tickets" link="/mytickets" />
            <NavBarButton label="My Likes" link="mycollections" />
            <NavBarButton
              label="Sign Out"
              link="/"
              onClick={this.props.logout}
            />
          </Bar>

          <div>
            <h1 className={myEventsHeading}>Manage Events</h1>
            <ul className={deleteDot}>
              {this.props.ownEvents.map(eventId => {
                const currentEvent = this.props.events.find(
                  event => event.id === eventId
                );

                if (currentEvent) {
                  let timeString = timeDecomp(currentEvent.time);
                  return (
                    <li key={eventId}>
                      <MyEvent
                        title={currentEvent.title}
                        date={currentEvent.event_date}
                        time={timeString}
                        eventId={eventId}
                        deleteEvent={this.props.deleteEvent}
                        price={currentEvent.ticket.price}
                        quantity={currentEvent.ticket.quantity}
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
