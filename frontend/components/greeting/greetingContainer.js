import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import Greeting from "./greeting";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Greeting)
);
