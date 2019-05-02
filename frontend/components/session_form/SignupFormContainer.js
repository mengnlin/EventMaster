import { connect } from "react-redux";
import React from "react";
import { signup, login } from "../../actions/session_actions";
import SessionForm from "./SessionForm";
import "../../../app/assets/stylesheets/session.css";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({ errors: state.errors.session });

const mapDispatchToProps = dispatch => ({
  signup: currentUser => dispatch(signup(currentUser)),
  login: currentUser => dispatch(login(currentUser))
});

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserLogIn = this.demoUserLogIn.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    this.props.signup(this.state).then(() => this.props.history.push("/"));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  demoUserLogIn() {
    this.setState({ username: "mena", password: "aaaaaa" }, () => {
      this.props.login(this.state);
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-form-container">
          <span className="login-message">Sign Up Here!</span>
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="login-input">
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
                className="login-input-box"
              />
            </div>
            <div className="login-input">
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                className="login-input-box"
              />
            </div>

            <div className="login-input">
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className="login-input-box"
              />
            </div>

            <input
              type="submit"
              className="login-signin-button"
              value="Log in"
            />
          </form>
          <button className="login-demouser" onClick={this.demoUserLogIn}>
            <span>Demo User Login</span>
          </button>
        </div>
        {this.renderErrors()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
