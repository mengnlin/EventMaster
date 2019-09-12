import { connect } from "react-redux";
import { signup, clearErrors, login } from "../../actions/session_actions";
import SessionForm from "./SessionForm";

const mapStateToProps = state => ({
  errors: state.errors.session,
  loginMessage: "Sign Up",
  isSignUp: true
});

const mapDispatchToProps = dispatch => ({
  processForm: currentUser => dispatch(signup(currentUser)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
