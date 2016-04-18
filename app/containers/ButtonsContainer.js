import { connect } from 'react-redux';
import { selectAccuracy, selectWpm } from '../selectors/StatisticsSelectors';
import { startGame, stopGame } from '../actions/ButtonsActions';
import Buttons from '../components/Buttons';

const mapStateToProps = (state) => ({
  gameStarted: state.timer.active,
  wpm: selectWpm(state),
  accuracy: selectAccuracy(state)
});

const mapDispatchToProps = (dispatch) => ({
  onStart: (typedCount, wpm, accuracy) => dispatch(startGame(typedCount, wpm, accuracy)),
  onStop: (typedCount, wpm, accuracy) => dispatch(stopGame(typedCount, wpm, accuracy))
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
