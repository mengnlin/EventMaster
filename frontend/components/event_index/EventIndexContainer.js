import { connect } from "react-redux";
import EventIndex from "./EventIndex";
import { fetchEvents, deleteEvent } from "../../actions/event_actions";
const mapStateToProp = state => {
  const events = Object.keys(state.entities.events).map(
    id => state.entities.events[id]
  );
  return {
    events,
    currentUserId: state.session.currentUserId,
    PageType: "Index"
  };
  // eventd:state.events
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: id => dispatch(deleteEvent(id))
});

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(EventIndex);
