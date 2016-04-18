import { connect } from 'react-redux';
import Highscores from '../components/Highscores';

const mapStateToProps = (state) => ({
  wpm: state.highscores.wpm,
  accuracy: state.highscores.accuracy
});

export default connect(mapStateToProps)(Highscores);
