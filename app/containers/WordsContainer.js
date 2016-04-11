import { connect } from 'react-redux';
import Words from '../components/Words';

const mapStateToProps = (state) => ({
  evaluatedWords: state.evaluatedWords,
  upcomingWords: state.upcomingWords,
  currentInput: state.currentInput
});

export default connect(mapStateToProps)(Words);
