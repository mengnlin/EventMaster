import { connect } from "react-redux";
import { updateEvent } from "../../actions/event_actions";
import EventForm from "./EventForm";

const mapStateToProps = state => ({
  formType: "Update Event",
  errors: state.errors.event
});

const mapDispatchToProps = dispatch => ({
  processForm: event => dispatch(updateEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
