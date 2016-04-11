import React, { PropTypes } from 'react';
import ActiveWordLetter from './ActiveWordLetter';

export default function ActiveWord({ word, currentInput }) {
  const letters = word.split('').map((lettr, idx) => ({
    letter: lettr, correct: currentInput[idx] ? currentInput[idx] === lettr : null
  }));

  return (
    <span>{letters.map((letter, i) => <ActiveWordLetter letter={letter} key={i} />)} </span>
  );
}

ActiveWord.propTypes = {
  word: PropTypes.string.isRequired,
  currentInput: PropTypes.string.isRequired
};
