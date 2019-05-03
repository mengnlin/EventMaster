import { connect } from "react-redux";
import React from "react";
import { signup, clearErrors } from "../../actions/session_actions";
import SessionForm from "./SessionForm";

import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  errors: state.errors.session,
  loginMessage: "Sign Up",
  isSignUp: true
});

const mapDispatchToProps = dispatch => ({
  processForm: currentUser => dispatch(signup(currentUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
