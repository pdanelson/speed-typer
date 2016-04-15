import { connect } from 'react-redux';
import Statistics from '../components/Statistics';
import { calcAccuracy, calcTypedCount, calcWordsPerMinute } from '../reducers/SpeedTyperReducer';

const mapStateToProps = (state) => ({
  typedCount: calcTypedCount(state),
  wpm: calcWordsPerMinute(state),
  accuracy: calcAccuracy(state)
});

export default connect(mapStateToProps)(Statistics);
