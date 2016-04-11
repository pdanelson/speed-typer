import React, { PropTypes } from 'react';

export default function Statistics({ evaluatedWords, startTime }) {
  const calculateAccuracy = () => {
    const correctWords = evaluatedWords.filter(word => word.correct);
    return Math.round(correctWords.length / evaluatedWords.length * 10000) / 100 || 0;
  };

  const calculateWordsPerMinute = () => {
    const elapsedMinutes = (Date.now() - startTime) / 1000 / 60;
    return Math.round(evaluatedWords.length / elapsedMinutes * 100) / 100 || 0;
  };

  return (
    <div>
      <div>{'Words typed: '.concat(evaluatedWords.length)}</div>
      <div>{'Words per minute: '.concat(calculateWordsPerMinute())}</div>
      <div>{'Accuracy: '.concat(calculateAccuracy()).concat('%')}</div>
    </div>
  );
}

Statistics.propTypes = {
  evaluatedWords: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  startTime: PropTypes.number.isRequired
};
