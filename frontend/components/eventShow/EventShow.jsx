import React from "react";
import { withRouter } from "react-router-dom";
import EventShowHeading from "./EventShowHeading";
import { fetchEvent } from "../../util/event_api_util";
import EventShowDetails from "./EventShowDetails";
import { css } from "emotion";
import Bar from "../Bar";
import NavBarButton from "../NavBarButton";
class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    fetchEvent(id).then(event => this.setState({ event }));
  }

  render() {
    let event = this.state.event;
    if (event) {
      return (
        <>
          <Bar>
            {!!this.state.username || (
              <NavBarButton label="Sign In" link="/login" />
            )}
            {!!this.state.username || (
              <NavBarButton label="Sign Up" link="/signup" />
            )}
            {this.state.username && (
              <NavBarButton label="Create Event" link="/event/new" />
            )}
            {this.state.username && (
              <NavBarButton label="My Events" link="/myevents" />
            )}
            {this.state.username && (
              <NavBarButton label="Sign Out" link="/" onClick={logout} />
            )}
          </Bar>
          {/* <div className={EventShowBackground} /> */}
          <div className={EventShowContainer}>
            <EventShowHeading
              title={event.title}
              date={event.event_date}
              organizer={event.username}
              cover={event.pictureUrl}
            />

            <EventShowDetails
              description={event.description}
              location={event.location}
              date={event.event_date}
              time={event.time}
            />
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

const EventShowContainer = css`
  margin: 20px auto 0 auto;
  padding: 80px 0 80px 0;
  max-width: 1272px;
`;

// const EventShowBackground = css`
// background-image:url()
// `;

// export default EventShow;
export default withRouter(EventShow);
