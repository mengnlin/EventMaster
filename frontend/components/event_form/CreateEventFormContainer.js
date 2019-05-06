import { connect } from "react-redux";
import { createEvent, clearErrors } from "../../actions/event_actions";
import EventForm from "./EventForm";

const mapStateToProps = state => {
  let event = {
    title: "testing",
    description: "testing tesing",
    event_date: "01/01/2019"
  };
  return { event, formType: "Create Event", errors: state.errors.event };
};

const mapDispatchToProps = dispatch => ({
  processForm: event => dispatch(createEvent(event)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
