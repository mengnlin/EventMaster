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
import EventShowRegisterBar from "./EventShowRegisterBar";
import { createPurchasedTicket } from "../../util/purchased_tickets_util";
const mapStateToProps = state => ({
  currentUser: state.entities.user && state.entities.user.id,
  purchased_tickets: state.entities.purchased_tickets
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
    const purchaseATicket = () =>
      alert("You had succefully purchase a ticket!");
    if (event) {
      let purchasesTicketNumber = event.purchased_ticket_count;
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
              <NavBarButton label="My Tickets" link="/mytickets" />
            )}
            {this.props.currentUser && (
              <NavBarButton label="My Likes" link="/mycollections" />
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
              price={event.ticket.price}
            />
            <EventShowRegisterBar
              action={() => {
                if (!this.props.currentUser) {
                  alert("Please Sign in first");
                } else {
                  createPurchasedTicket(event.ticket.ticketId).then(() => {
                    purchaseATicket();
                    return fetchEvent(event.id).then(event =>
                      this.setState({ event })
                    );
                  });
                }
              }}
              reFetch={() => {
                return fetchEvent(event.id).then(event =>
                  this.setState({ event })
                );
              }}
              isLike={event.isLike}
              id={event.id}
              collectionId={event.followed_id}
              ticket={event.ticket}
              purchasedTicketNumber={purchasesTicketNumber}
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
  box-sizing: border-box;
  align-items: stretch;
  flex-direction: column;
  max-width: 1080px;
`;

const ConnectedEventShow = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
export default withRouter(ConnectedEventShow);
