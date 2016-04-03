import React, { PropTypes } from 'react';

export default function PreviousWord({ word }) {
  const styles = !word.correct ? { textDecoration: 'line-through' } : {};
  return (
    <div>
      Previously typed word: <span style={styles}>{word.word}</span>
    </div>
  );
}

PreviousWord.propTypes = {
  word: PropTypes.shape({
    word: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
  }).isRequired
};
