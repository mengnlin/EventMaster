import { connect } from "react-redux";
import {
  updateEvent,
  fetchEvent,
  clearErrors
} from "../../actions/event_actions";
import EventForm from "./EventForm";
import React from "react";

const mapStateToProps = (state, ownProps) => {
  let defaultEvent = { title: "", description: "", event_date: "" };
  let event = state.entities.events[ownProps.match.params.id] || defaultEvent;
  return { event, formType: "Update Event", errors: state.errors.event };
};

const mapDispatchToProps = dispatch => ({
  processForm: event => dispatch(updateEvent(event)),
  clearErrors: () => dispatch(clearErrors()),
  fetchEvent: id => dispatch(fetchEvent(id))
});

class EditEventForm extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
  }

  render() {
    const { event, formType, processForm, errors, clearErrors } = this.props;
    const processFormWithID = event =>
      processForm({ ...event, id: this.props.match.params.id });
    return (
      <EventForm
        event={event}
        formType={formType}
        processForm={processFormWithID}
        errors={errors}
        clearErrors={clearErrors}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEventForm);
