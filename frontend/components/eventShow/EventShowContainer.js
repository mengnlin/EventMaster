import EventShow from "./EventShow";
import { connect } from "react-redux";
import { fetchEvent } from "../../actions/event_actions";
const mapStateToProps = (state, ownProps) => ({
  event: state.entities.events[ownProps.match.params.id],
  id: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
