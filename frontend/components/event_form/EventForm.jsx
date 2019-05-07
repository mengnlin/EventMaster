import React from "react";
import { withRouter } from "react-router-dom";
import EventEditorWrapper from "./EventEditorWrapper";
import editEventFormData from "./editEventFormData";
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
        <form onSubmit={this.handleSubmit}>
          <EventEditorWrapper {...editEventFormData.basicInfo}>
            <input
              type="text"
              value={this.state.title}
              placeholder="Event Title"
              onChange={this.update("title")}
            />
          </EventEditorWrapper>
          <EventEditorWrapper {...editEventFormData.location}>
            <input
              type="text"
              value={this.state.description}
              placeholder="Event description"
              onChange={this.update("description")}
            />
          </EventEditorWrapper>
          <EventEditorWrapper {...editEventFormData.dateTime}>
            <input
              type="date"
              value={this.state.event_date}
              placeholder="Event Date"
              onChange={this.update("event_date")}
            />
          </EventEditorWrapper>
          {this.renderErrors()}
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(EventFrom);
