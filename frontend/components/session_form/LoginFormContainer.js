import { connect } from "react-redux";
import SessionForm from "./SessionForm";
import { login, clearErrors } from "../../actions/session_actions";

const mapStateToProps = state => ({
  errors: state.errors.session,
  loginMessage: "Sign In",
  isSignIn: true
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
