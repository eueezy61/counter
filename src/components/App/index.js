import { connect } from "react-redux";
import { actionCreators as counterActions } from "../../redux/modules/reducer";
import App from "./presenter";

const mapStateToProps = state => ({
  number: state.number,
  color: state.color
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterActions.increment()),
  decrement: () => dispatch(counterActions.decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
