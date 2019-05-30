import React from "react";
import Bar from "./Bar";
import NavBarButton from "./NavBarButton";
import { connect } from "react-redux";
import { logout } from "../actions/session_actions";
import EventIndexContainer from "./event_index/EventIndexContainer";
import Banner from "./Banner";
import GeneralEventsView from "./GeneralEventsView";
import Footer from "./Footer";
// import Search from "./Search";

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
        {currentUser && <NavBarButton label="My Tickets" link="/mytickets" />}
        {currentUser && <NavBarButton label="My Events" link="/myevents" />}
        {currentUser && (
          <NavBarButton label="Sign Out" link="/" onClick={logout} />
        )}
      </Bar>
      <Banner
        city="San Francisco"
        description="San Francisco has something for everyone. Foodies should grab a burrito in the Mission and hit up Farmers Market at the Ferry Building. Shop shoes and boutiques in Hayes Valley. Get outside and stroll Golden Gate Park, say to the Bison (seriously). See the city from the water by taking a ferry or catamaran under the bridge. Check out current events below."
        cover="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F38669877%2F108919755319%2F1%2Foriginal.jpg?w=512&auto=compress&s=1ff4700890efab707180f079192d1082"
      />

      {/* <Search /> */}
      <GeneralEventsView isEditorPick="Editor's Pick" title="Editor's Pick" />
      <GeneralEventsView category="music" title="Music" />
      <GeneralEventsView category="art" title="Art" />
      <GeneralEventsView category="food" title="Food" />
      {/* <Footer /> */}
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
