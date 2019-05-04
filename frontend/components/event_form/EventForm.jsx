import React from "react";

class EventFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      event_date: ""
    };

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
    this.props.processForm(event).then(() => this.props.history.push("/"));
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
          <input
            type="text"
            value={this.state.title}
            placeholder="Event Title"
            onChange={this.update("title")}
          />
          <input
            type="text"
            value={this.state.description}
            placeholder="Event description"
            onChange={this.update("description")}
          />
          <input
            type="date"
            value={this.state.event_date}
            placeholder="Event Date"
            onChange={this.update("event_date")}
          />
          {this.renderErrors()}
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default EventFrom;
