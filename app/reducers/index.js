import { combineReducers } from 'redux';
import highscores from './HighscoresReducer';
import timer from './TimerReducer';
import input from './InputReducer';
import words from './WordsReducer';

export default combineReducers({
  highscores,
  timer,
  input,
  words
});
