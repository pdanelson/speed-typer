import React, { PropTypes } from 'react';
import { first, tail, last } from 'lodash';
import PreviousWord from './PreviousWord';
import ActiveWord from './ActiveWord';
import InactiveWord from './InactiveWord';

export default function Words({ evaluatedWords, upcomingWords, currentInput }) {
  const previousWord = last(evaluatedWords);
  const activeWord = first(upcomingWords);
  const inactiveWords = tail(upcomingWords);
  return (
    <div>
      { previousWord ? <PreviousWord word={previousWord} /> : null }
      <ActiveWord word={activeWord} currentInput={currentInput} />
      {inactiveWords.map((inactiveWord, i) => <InactiveWord word={inactiveWord} key={i} />)}
    </div>
  );
}

Words.propTypes = {
  evaluatedWords: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  upcomingWords: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentInput: PropTypes.string.isRequired
};

