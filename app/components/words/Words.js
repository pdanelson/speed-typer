import React, { PropTypes } from 'react';
import ActiveWord from './ActiveWord';
import InactiveWord from './InactiveWord';

export default function Words({ activeWord, inactiveWords }) {
  return (
    <span>
      <ActiveWord letters={activeWord} />
      {inactiveWords.map((inactiveWord, i) => <InactiveWord word={inactiveWord} key={i} />)}
    </span>
  );
}

Words.propTypes = {
  activeWord: PropTypes.arrayOf(PropTypes.shape({
    letter: PropTypes.string.isRequired,
    correct: PropTypes.bool
  }).isRequired).isRequired,
  inactiveWords: PropTypes.arrayOf(PropTypes.string.isRequired)
};
