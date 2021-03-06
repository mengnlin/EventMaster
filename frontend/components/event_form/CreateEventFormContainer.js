import { connect } from "react-redux";
import { createEvent, clearErrors } from "../../actions/event_actions";
import { logout } from "../../actions/session_actions";
import EventForm from "./EventForm";

const mapStateToProps = state => {
  let event = {
    title: "",
    description: "",
    event_date: "",
    location: "",
    time: "",
    category: "music",
    ticket: "",
    price: ""
  };
  return { event, formType: "Create Event", errors: state.errors.event };
};

const mapDispatchToProps = dispatch => ({
  processForm: event => dispatch(createEvent(event)),
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
