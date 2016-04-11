import { connect } from 'react-redux';
import { changeInput, submitInput } from '../actions/SpeedTyperActions';
import Typing from '../components/Typing';

const mapStateToProps = (state) => ({
  currentInput: state.currentInput
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (input) => dispatch(changeInput(input)),
  onSubmit: () => dispatch(submitInput())
});

export default connect(mapStateToProps, mapDispatchToProps)(Typing);

