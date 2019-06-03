import { connect } from "react-redux";
import React from "react";
import { logout } from "../../actions/session_actions";
import {
  fetchCollectedEvents,
  createCollection,
  deleteCollectedEvents
} from "../../util/collection_util";
import { css } from "emotion";
import Bar from "../Bar";
import NavBarButton from "../NavBarButton";
import MyCollection from "./MyCollection";

import { timeDecomp } from "../utils";

const mapStateToProps = state => ({
  currentUser: state.entities.user
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
class MyCollections extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  //   componentDidMount() {
  //     fetchCollectedEvents().then(events =>
  //       this.setState({ collectedEvents: events })
  //     );
  //   }
  render() {
    // return "aaa";
    // let CollectedEvents;
    // fetchCollectedEvents().then(events => (CollectedEvents = events));
    // return
    console.log(this.props.currentUser);
    const likes = this.props.currentUser.likes;
    console.log("likes", likes);
    if (!likes) {
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
              {likes.map((like, index) => {
                let timeString = timeDecomp(like.event_time);
                return (
                  <li key={index}>
                    <MyCollection
                      remove={() => this.props.deleteCollectedEvents(like.id)}
                      title={like.event_title}
                      date={like.event_date}
                      time={timeString}
                      cover={like.event_pictureUrl}
                      location={like.event_location}
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
  /* list-style-position: inside; */
  margin: 0;
  padding: 0;
`;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCollections);
