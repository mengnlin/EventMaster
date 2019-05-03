import React from "react";
import Bar from "../Bar";
import "./sessions.css";
import NavBarButton from "../NavBarButton";
class SessionFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
      // errors:props.errors;
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserLogIn = this.demoUserLogIn.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
    this.props.processForm(user).then(() => this.props.history.push("/"));
  }
  demoUserLogIn() {
    this.setState({ username: "mena", password: "aaaaaa" }, () => {
      this.props.login(this.state);
      this.props.history.push("/");
    });
  }
  renderErrors() {
    return (
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-container">
        <Bar>
          {this.props.isSignIn || (
            <NavBarButton label="Sign In" link="/login" />
          )}
          {this.props.isSignUp || (
            <NavBarButton label="Sign Up" link="/signup" />
          )}
        </Bar>
        <div className="login-form-container">
          <img src="Logo.png" />
          <span className="login-message">Let's get started</span>
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <div className="login-input">
                <input
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input-box"
                />
              </div>
              {this.props.isSignUp && (
                <div className="login-input">
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                    className="login-input-box"
                  />
                </div>
              )}
              <div className="login-input">
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input-box"
                />
              </div>
              {this.renderErrors()}
              <input
                type="submit"
                className="login-signin-button"
                value={this.props.loginMessage}
              />
            </form>
            <button
              className="login-signin-button"
              onClick={this.demoUserLogIn}
            >
              <span>Demo User Login</span>
            </button>
            <span className="login-footer">
              By continuing, I accept the Eventmaster terms of service,
              community guidelines and have read the privacy policy.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionFrom;
