import { connect } from 'react-redux';
import { changeInput, submitInput } from '../actions/TypingActions';
import Typing from '../components/Typing';

const mapStateToProps = (state) => ({
  input: state.input,
  gameStarted: state.timer.active
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (input) => dispatch(changeInput(input)),
  onSubmit: (input) => dispatch(submitInput(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(Typing);
