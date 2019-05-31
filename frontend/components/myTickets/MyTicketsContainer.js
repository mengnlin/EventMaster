import { connect } from "react-redux";
import React from "react";
import { logout } from "../../actions/session_actions";
import { css } from "emotion";
import Bar from "../Bar";
import NavBarButton from "../NavBarButton";
import MyPurchasedTicket from "./MyPurchasedTicket";
import { fetchPurchasedTickets } from "../../actions/purchased_tickets_actions";
import { deletePurchasedTicket } from "../../actions/purchased_tickets_actions";
import { timeDecomp } from "../utils";
const mapStateToProps = state => ({
  currentUser: state.entities.user,
  purchased_tickets: state.entities.purchased_tickets
});

const mapDispatchToProps = dispatch => ({
  fetchPurchasedTickets: () => dispatch(fetchPurchasedTickets()),
  deletePurchasedTicket: id => dispatch(deletePurchasedTicket(id)),
  logout: () => dispatch(logout())
});

class MyTickets extends React.Component {
  componentDidMount() {
    this.props.fetchPurchasedTickets(this.props.purchased_tickets);
  }
  render() {
    let purchased_tickets = this.props.purchased_tickets;
    if (!purchased_tickets) {
      return (
        <>
          <Bar>
            <NavBarButton label="Create Event" link="/event/new" />
            <NavBarButton label="My Events" link="/myevents" />
            <NavBarButton
              label="Sign Out"
              link="/"
              onClick={this.props.logout}
            />
          </Bar>
          <h1 className={myTicketsHeading}>My Tickets</h1>
        </>
      );
    } else {
      return (
        <div>
          <Bar>
            <NavBarButton label="Create Event" link="/event/new" />
            <NavBarButton label="My Events" link="/myevents" />
            <NavBarButton
              label="Sign Out"
              link="/"
              onClick={this.props.logout}
            />
          </Bar>
          <div>
            <h1 className={myTicketsHeading}>My Tickets</h1>
            <ul className={deleteDot}>
              {purchased_tickets.map((purchasedTicket, index) => {
                let timeString = timeDecomp(purchasedTicket.event_time);
                return (
                  <li key={index}>
                    <MyPurchasedTicket
                      title={purchasedTicket.event_title}
                      date={purchasedTicket.event_date}
                      time={timeString}
                      cover={purchasedTicket.event_pictureUrl}
                      location={purchasedTicket.event_location}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
  }
  // }
}

const myTicketsHeading = css`
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
)(MyTickets);
