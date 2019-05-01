import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import SessionForm from "./SessionForm";
import { Link } from "react-router-dom";
const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Sign in",
  navLink: <Link to="/signup">Sign up</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
