import React, { PropTypes } from 'react';

export default function Statistics({ statistics: { correctCount, mistakeCount, wpm, accuracy } }) {
  return (
    <div>
      <p>Correctly typed words: {correctCount}</p>
      <p>Mistyped words: {mistakeCount}</p>
      <p>Words per minute: {wpm}</p>
      <p>Typing accuracy: {accuracy}%</p>
    </div>
  );
}

Statistics.propTypes = {
  statistics: PropTypes.objectOf(PropTypes.number.isRequired).isRequired
};
