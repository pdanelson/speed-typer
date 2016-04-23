import React, { PropTypes } from 'react';
import Highscores from './Highscores';
import Statistics from './Statistics';
import Words from './Words';

export default function Opponent({ bestWpm, bestAccuracy, wpm, accuracy,
  secondsElapsed, previousWord, activeWord, inactiveWords, input }) {
  return (
    <div>
      <Highscores wpm={bestWpm} accuracy={bestAccuracy} />
      <Statistics wpm={wpm} accuracy={accuracy} secondsElapsed={secondsElapsed} />
      <Words previousWord={previousWord} activeWord={activeWord}
        inactiveWords={inactiveWords} input={input}
      />
    </div>
  );
}

Opponent.propTypes = {
  bestWpm: PropTypes.number.isRequired,
  bestAccuracy: PropTypes.number.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
  wpm: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  previousWord: PropTypes.shape({
    word: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
  }),
  activeWord: PropTypes.string,
  inactiveWords: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  input: PropTypes.string.isRequired
};
