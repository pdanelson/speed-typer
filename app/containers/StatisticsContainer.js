import { connect } from 'react-redux';
import Statistics from '../components/Statistics';
import { selectAccuracy, selectTypedCount, selectWpm } from '../selectors/StatisticsSelectors';

const mapStateToProps = (state) => ({
  secondsElapsed: state.timer.seconds,
  typedCount: selectTypedCount(state),
  wpm: selectWpm(state),
  accuracy: selectAccuracy(state)
});

export default connect(mapStateToProps)(Statistics);
