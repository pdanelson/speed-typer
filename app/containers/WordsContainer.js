import { connect } from 'react-redux';
import { first, tail, last } from 'lodash';
import Words from '../components/Words';

const mapStateToProps = (state) => ({
  previousWord: last(state.evaluatedWords),
  activeWord: first(state.upcomingWords),
  inactiveWords: tail(state.upcomingWords),
  currentInput: state.currentInput
});

export default connect(mapStateToProps)(Words);
