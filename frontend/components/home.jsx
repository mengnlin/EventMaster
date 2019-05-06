import React from "react";
import Bar from "./Bar";
import NavBarButton from "./NavBarButton";
import { connect } from "react-redux";
import { logout } from "../actions/session_actions";
import EventIndexContainer from "./event_index/EventIndexContainer";
import EventTile from "./EventTile";
import Banner from "./Banner";
const mapStateToProps = state => ({
  currentUser: state.entities.user
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const Home = ({ currentUser, logout }) => {
  return (
    <>
      <Bar>
        {!!currentUser || <NavBarButton label="Sign In" link="/login" />}
        {!!currentUser || <NavBarButton label="Sign Up" link="/signup" />}
        {currentUser && <NavBarButton label="Create Event" link="/event/new" />}
        {currentUser && <NavBarButton label="My Events" link="/myevents" />}
        {currentUser && (
          <NavBarButton label="Sign Out" link="/" onClick={logout} />
        )}
      </Bar>
      <Banner
        city="NYC"
        description="is good"
        cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F38669877%2F108919755319%2F1%2Foriginal.jpg?w=512&auto=compress&s=1ff4700890efab707180f079192d1082"
      />
      <EventTile
        title="today"
        organizer="mena"
        date="01/01/2019"
        cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F60506822%2F108919755319%2F1%2Foriginal.20190416-231059?w=400&auto=compress&s=46e7dd78567c1e94bb790db8443f2272"
      />
      <EventIndexContainer />,
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
