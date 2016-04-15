import React, { PropTypes } from 'react';
import PreviousWord from './PreviousWord';
import ActiveWord from './ActiveWord';
import InactiveWord from './InactiveWord';

export default function Words({ previousWord, activeWord, inactiveWords, currentInput }) {
  return (
    <div>
      { previousWord ? <PreviousWord word={previousWord} /> : null }
      <ActiveWord word={activeWord} currentInput={currentInput} />
      {inactiveWords.map((inactiveWord, i) => <InactiveWord word={inactiveWord} key={i} />)}
    </div>
  );
}

Words.propTypes = {
  previousWord: PropTypes.shape({
    word: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
  }),
  activeWord: PropTypes.string.isRequired,
  inactiveWords: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentInput: PropTypes.string.isRequired
};

