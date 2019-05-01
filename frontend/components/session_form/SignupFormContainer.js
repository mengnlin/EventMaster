import { connect } from "react-redux";
import React from "react";
import { signup } from "../../actions/session_actions";
import SessionForm from "./SessionForm";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Sign Up",
  navLink: <Link to="/login">Sign In</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: currentUser => dispatch(signup(currentUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
