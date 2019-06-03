import { connect } from "react-redux";
import React from "react";
import { logout } from "../../actions/session_actions";
import { fetchCollectedEvents } from "../../util/collection_util";
import { css } from "emotion";
import Bar from "../Bar";
import NavBarButton from "../NavBarButton";
import { timeDecomp } from "../utils";
import MyCollectionItem from "./MyCollectionItem";

const mapStateToProps = state => ({
  currentUser: state.entities.user
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
class MyCollections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetchCollectedEvents().then(collections => this.setState({ collections }));
  }
  render() {
    const collectedEvents = this.state.collections;
    if (!collectedEvents) {
      return (
        <>
          <Bar>
            <NavBarButton label="Create Event" link="/event/new" />
            {this.props.currentUser && (
              <NavBarButton label="My Tickets" link="/mytickets" />
            )}
            <NavBarButton label="My Events" link="/myevents" />
            <NavBarButton
              label="Sign Out"
              link="/"
              onClick={this.props.logout}
            />
          </Bar>
          <h1 className={myTicketsHeading}>My Likes</h1>
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
            <h1 className={myTicketsHeading}>My Likes</h1>
            <ul className={deleteDot}>
              {collectedEvents.map((collectedEvent, index) => {
                let timeString = timeDecomp(collectedEvent.time);
                return (
                  <li key={index}>
                    <MyCollectionItem
                      title={collectedEvent.title}
                      date={collectedEvent.event_date}
                      time={timeString}
                      cover={collectedEvent.pictureUrl}
                      location={collectedEvent.location}
                      reFetch={() => {
                        // debugger;
                        return fetchCollectedEvents().then(collections =>
                          this.setState({ collections })
                        );
                      }}
                      id={collectedEvent.followed_id}
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
  margin: 0;
  padding: 0;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCollections);
