import React from "react";
import { withRouter } from "react-router-dom";
import EventShowHeading from "./EventShowHeading";
import { fetchEvent } from "../../util/event_api_util";
import EventShowDetails from "./EventShowDetails";
import { css } from "emotion";
import Bar from "../Bar";
import NavBarButton from "../NavBarButton";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => ({
  currentUser: state.entities.user && state.entities.user.id
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

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
            {!!this.props.currentUser || (
              <NavBarButton label="Sign In" link="/login" />
            )}
            {!!this.props.currentUser || (
              <NavBarButton label="Sign Up" link="/signup" />
            )}
            {this.props.currentUser && (
              <NavBarButton label="Create Event" link="/event/new" />
            )}
            {this.props.currentUser && (
              <NavBarButton label="My Events" link="/myevents" />
            )}
            {this.props.currentUser && (
              <NavBarButton label="Sign Out" onClick={this.props.logout} />
            )}
          </Bar>
          <div
            className={backgroundImage}
            style={{
              background: `url(${event.pictureUrl})`,
              backgroundSize: "cover"
            }}
          />
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

const backgroundImage = css`
  width: 100%;
  height: 650px;
  background-color: black;
  filter: blur(12px);
  position: absolute;
  overflow: hidden;
`;
const EventShowContainer = css`
  margin: 20px auto 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 80px 0;
  max-width: 1272px;
`;

const ConnectedEventShow = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
export default withRouter(ConnectedEventShow);
