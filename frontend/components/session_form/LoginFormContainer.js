import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import "../../../app/assets/stylesheets/session.css";
import Logo from "../../../app/assets/images/Logo.png";

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

class LoginForm extends React.Component {
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
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => this.props.history.push("/"));
    // {
    //   this.setState({ errors: [] });
    // }
  }
  demoUserLogIn() {
    this.setState({ username: "mena", password: "aaaaaa" }, () => {
      this.props.login(this.state);
      this.props.history.push("/");
    });
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

  render() {
    return (
      <div className="login-container">
        <div className="login-form-container">
          <span className="login-message">Let's get started</span>
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="login-input">
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input-box"
              />
            </div>

            <div className="login-input">
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input-box"
              />
            </div>

            <input
              type="submit"
              className="login-signin-button"
              value="Log in"
            />
            {/* <span>Log in</span> */}
            <button className="login-demouser" onClick={this.demoUserLogIn}>
              <span>Demo User Login</span>
            </button>
          </form>
        </div>
        {this.renderErrors()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
