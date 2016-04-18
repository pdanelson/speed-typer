import React, { PropTypes } from 'react';

export default function Statistics({ typedCount, wpm, accuracy, secondsElapsed }) {
  return (
    <div>
      <div>{'Seconds elapsed: '.concat(secondsElapsed)}</div>
      <div>{'Words typed: '.concat(typedCount)}</div>
      <div>{'Words per minute: '.concat(wpm)}</div>
      <div>{'Accuracy: '.concat(accuracy).concat('%')}</div>
    </div>
  );
}

Statistics.propTypes = {
  secondsElapsed: PropTypes.number.isRequired,
  typedCount: PropTypes.number.isRequired,
  wpm: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired
};
