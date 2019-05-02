import { connect } from "react-redux";
import React from "react";
import { signup } from "../../actions/session_actions";
import SessionForm from "./SessionForm";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  errors: state.errors.session
  // formType: "Sign Up",
});

const mapDispatchToProps = dispatch => ({
  signup: currentUser => dispatch(signup(currentUser))
});

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
    this.props.history.push("/");
    // e=> this.setState(e.currentTarget.value)
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li>{error}</li>
        ))}
        ;
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Sign Up Here!
          {/* <Link to="/login">Sign In</Link> */}
          <br />
          <br />
          <label className="session-form">
            {" "}
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>
          <br />
          <label className="session-form">
            {" "}
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <br />
          <label className="session-form">
            {" "}
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <button className="session-form">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
