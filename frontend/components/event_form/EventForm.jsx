import React from "react";
import { withRouter } from "react-router-dom";
import EventEditorWrapper from "./EventEditorWrapper";
import editEventFormData from "./editEventFormData";
import { css } from "emotion";
import { logout } from "../../actions/session_actions";
import Bar from "../Bar";
import NavBarButton from "../NavBarButton";
class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.previewPhoto = this.previewPhoto.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  previewPhoto(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("event_date", this.state.event_date);
    formData.append("location", this.state.location);
    formData.append("time", this.state.time);
    formData.append("category", this.state.category);
    if (this.props.formType === "Update Event") {
      debugger;
      formData.append("id", this.state.id);
    }
    // debugger;
    if (this.state.imageFile) {
      formData.append("picture", this.state.imageFile);
    }
    console.log(this.state);
    // console.log(formData);
    this.props
      .processForm(formData, this.state.id)
      .then(event => this.props.history.push(`/events/${event.event.id}`));
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
            <input
              type="file"
              // value={this.state.imageUrl}
              onChange={this.previewPhoto}
              accept="image/png, image/jpeg"
            />
            {this.state.imageUrl && (
              <img src={`${this.state.imageUrl}`} className={imageStyle} />
            )}
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

const imageStyle = css`
  max-width: 100%;
`;
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
  font-size: 14px;
  padding: 0px 12px 0px 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 41px;
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

export default withRouter(EventForm);
