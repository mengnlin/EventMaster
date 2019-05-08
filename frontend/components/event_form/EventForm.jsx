import React from "react";
import { withRouter } from "react-router-dom";
import EventEditorWrapper from "./EventEditorWrapper";
import editEventFormData from "./editEventFormData";
import { css } from "emotion";
import { logout } from "../../actions/session_actions";
import Bar from "../Bar";
import NavBarButton from "../NavBarButton";
class EventFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state);
    this.props.processForm(event).then(event => {
      this.props.history.push(`/events/${event.event.id}`);
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
      <div>
        <Bar>
          <NavBarButton label="My Events" link="/myevents" />
          <NavBarButton label="Sign Out" link="/" onClick={logout} />
        </Bar>
        <form onSubmit={this.handleSubmit} className={formContainer}>
          <EventEditorWrapper {...editEventFormData.basicInfo}>
            <input
              className={inputstyle}
              type="text"
              value={this.state.title}
              placeholder="Event Title"
              onChange={this.update("title")}
            />
            <input
              className={inputstyle}
              type="text"
              value={this.state.description}
              placeholder="Event Description"
              onChange={this.update("description")}
            />

            <select
              className={customSelect}
              value={this.state.category}
              onChange={this.update("category")}
            >
              <option value="music">Music</option>
              <option value="art">Art</option>
              <option value="food">Food</option>
            </select>
          </EventEditorWrapper>
          <EventEditorWrapper {...editEventFormData.location}>
            <input
              className={inputstyle}
              type="text"
              value={this.state.location}
              placeholder="Event Location"
              onChange={this.update("location")}
            />
          </EventEditorWrapper>
          <EventEditorWrapper {...editEventFormData.dateTime}>
            <input
              className={inputstyle}
              type="date"
              value={this.state.event_date}
              placeholder="Event Date"
              onChange={this.update("event_date")}
            />
            <input
              className={inputstyle}
              type="time"
              value={this.state.time}
              placeholder="Event Time"
              onChange={this.update("time")}
            />
          </EventEditorWrapper>
          {this.renderErrors()}
          <input
            type="submit"
            value={this.props.formType}
            className={submitButton}
          />
        </form>
      </div>
    );
  }
}

const customSelect = css`
  width: 200px;
  height: 80;
  font-size: 16px;

  margin-top: 15px;
`;
const formContainer = css`
  margin: 20px auto 0 auto;
  padding: 20px 0 0 48px;
  width: 625px;
`;

const inputstyle = css`
  width: 100%;
  padding: 18px 12px 6px 12px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const submitButton = css`
  width: 320px;
  height: 44px;
  background-color: #d1410c;
  padding: 0 30px 1px;
  line-height: 24px;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
  outline: none;
  margin-left: 200px;
`;

export default withRouter(EventFrom);
