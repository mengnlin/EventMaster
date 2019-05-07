import React from "react";
import { withRouter } from "react-router-dom";
import EventEditorWrapper from "./EventEditorWrapper";
import editEventFormData from "./editEventFormData";
import { css } from "emotion";
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
      console.log(event);
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
        <span>{this.props.formType}</span>
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
          </EventEditorWrapper>
          <EventEditorWrapper {...editEventFormData.location}>
            <input
              className={inputstyle}
              type="text"
              value={this.state.description}
              placeholder="Event description"
              onChange={this.update("description")}
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
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

const formContainer = css`
  margin: 20px auto 0 auto;
  padding: 20px 0 0 48px;
  width: 625px;
`;

const inputstyle = css`
  width: 100%;
`;

export default withRouter(EventFrom);
