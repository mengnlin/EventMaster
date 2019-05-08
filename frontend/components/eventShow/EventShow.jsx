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
          <div className={EventShowContainer}>
            <EventShowHeading
              title={event.title}
              date={event.event_date}
              organizer={event.username}
              cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F57940989%2F57416335505%2F1%2Foriginal.20190306-023109?w=512&auto=compress&rect=0%2C0%2C9000%2C4500&s=08481b8b673075ee32a4d075b715b903"
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

// export default EventShow;
export default withRouter(EventShow);
