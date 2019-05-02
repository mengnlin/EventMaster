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
    this.props.login(user);
    this.props.history.push("/");
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="session-error">{error}</li>
        ))}
        ;
      </ul>
    );
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-form-container">
          <span>Log in Here!</span>
          <img src={Logo} />
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

            <button className="login-signin-button">Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
