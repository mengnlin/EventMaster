import React from "react";
import Bar from "./Bar";
import NavBarButton from "./NavBarButton";
import { connect } from "react-redux";
import { logout } from "../actions/session_actions";
import EventIndexContainer from "./event_index/EventIndexContainer";
const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
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
        {currentUser && (
          <NavBarButton label="Sign Out" link="/" onClick={logout} />
        )}
      </Bar>
      <EventIndexContainer />,
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
