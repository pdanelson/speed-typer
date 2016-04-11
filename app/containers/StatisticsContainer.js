import { connect } from 'react-redux';
import Statistics from '../components/Statistics';

const mapStateToProps = (state) => ({
  startTime: state.startTime,
  evaluatedWords: state.evaluatedWords
});

export default connect(mapStateToProps)(Statistics);
