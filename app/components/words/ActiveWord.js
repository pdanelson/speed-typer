import React, { PropTypes } from 'react';
import ActiveWordLetter from './ActiveWordLetter';

export default function ActiveWord({ letters }) {
  return (
    <span>
      {letters.map((letter, i) => <ActiveWordLetter letter={letter} key={i} />)}&nbsp;
    </span>
  );
}

ActiveWord.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.shape({
    letter: PropTypes.string.isRequired,
    correct: PropTypes.bool
  }).isRequired).isRequired
};
